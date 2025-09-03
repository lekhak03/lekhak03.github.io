import { useState, useEffect, useRef, useCallback } from "react";
import { ScrollArea } from "../components/ui/scroll-area";
import { cn } from "../lib/utils";

interface NavigationItem {
  id: string;
  label: string;
}

interface SquareNavigationProps {
  items: NavigationItem[];
  activeId: string;
  onItemClick: (item: NavigationItem) => void;
  className?: string;
}

export const SquareNavigation = ({ 
  items, 
  activeId, 
  onItemClick, 
  className 
}: SquareNavigationProps) => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const wheelLock = useRef(false);
  const deltaYAcc = useRef(0);
  const STEP_THRESHOLD = 40; // Minimum deltaY to trigger one step
  const RELEASE_DELAY = 350; // Lock duration to prevent fast multi-steps

  // Find the active item index and scroll to it
  useEffect(() => {
    const activeIndex = items.findIndex(item => item.id === activeId);
    if (activeIndex !== -1) {
      setFocusedIndex(activeIndex);
      scrollToItem(activeIndex);
    }
  }, [activeId, items]);

  // Scroll to focused item whenever it changes
  useEffect(() => {
    scrollToItem(focusedIndex);
  }, [focusedIndex]);

  const scrollToItem = useCallback((index: number) => {
    const element = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]');
    if (!element) return;
    
    const itemHeight = 40; // Approximate height of each item (py-2 + text)
    const containerHeight = element.clientHeight;
    const targetScrollTop = index * itemHeight - (containerHeight / 2) + (itemHeight / 2);
    
    element.scrollTo({
      top: Math.max(0, targetScrollTop),
      behavior: 'smooth'
    });
  }, []);

  const changeFocusedItem = useCallback((newIndex: number) => {
    // Loop back to start/end
    const index = newIndex < 0 ? items.length - 1 : newIndex >= items.length ? 0 : newIndex;
    setFocusedIndex(index);
    onItemClick(items[index]);
    scrollToItem(index);
  }, [items, onItemClick, scrollToItem]);

  const handleScroll = useCallback((event: WheelEvent) => {
    event.preventDefault();

    // If locked, ignore additional wheel events to enforce one-step-at-a-time
    if (wheelLock.current) return;

    // Accumulate delta to filter out tiny trackpad movements
    deltaYAcc.current += event.deltaY;

    if (Math.abs(deltaYAcc.current) >= STEP_THRESHOLD) {
      const direction = deltaYAcc.current > 0 ? 1 : -1;
      deltaYAcc.current = 0;

      wheelLock.current = true;
      changeFocusedItem(focusedIndex + direction);

      // Release lock after the animation finishes
      setTimeout(() => {
        wheelLock.current = false;
      }, RELEASE_DELAY);
    }
  }, [focusedIndex, changeFocusedItem]);

  useEffect(() => {
    const element = scrollAreaRef.current;
    if (!element) return;

    element.addEventListener('wheel', handleScroll, { passive: false });
    
    return () => {
      element.removeEventListener('wheel', handleScroll);
    };
  }, [handleScroll]);

  const handleItemClick = (item: NavigationItem, index: number) => {
    setFocusedIndex(index);
    onItemClick(item);
  };

  return (
    <div className={cn(
      "fixed top-4 right-4 w-48 h-32 bg-transparent overflow-hidden z-50",
      className
    )}>
      <ScrollArea ref={scrollAreaRef} className="h-full w-full">
        <div className="p-2 space-y-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style dangerouslySetInnerHTML={{
            __html: `
              [data-radix-scroll-area-viewport] {
                scrollbar-width: none !important;
                -ms-overflow-style: none;
              }
              [data-radix-scroll-area-viewport]::-webkit-scrollbar {
                width: 0;
                height: 0;
                display: none !important;
              }
            `
          }} />
          {items.map((item, index) => {
            const isFocused = index === focusedIndex;
            const distance = Math.abs(index - focusedIndex);
            const isAdjacent = distance === 1;
            const isFar = distance > 1;

            return (
              <div
                key={item.id}
                onClick={() => handleItemClick(item, index)}
                className={cn(
                  "w-full text-left px-3 py-2 text-sm font-medium transition-all duration-500 ease-out cursor-pointer transform",
                  // Focus state - bright green with scale
                  isFocused && "text-green-300 scale-110 font-semibold",
                  // Adjacent items - medium green with slight blur and scale
                  isAdjacent && "text-green-500 opacity-70 blur-[0.5px] scale-95",
                  // Far items - darker green with more blur and smaller scale
                  isFar && "text-green-600 opacity-40 blur-[1px] scale-90",
                  // Default state for non-focused items
                  !isFocused && "text-green-500"
                )}
              >
                {item.label}
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};