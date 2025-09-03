import { useState } from "react";
import { cn } from "../lib/utils";

interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  onClick?: () => void;
}

interface VerticalNavigationProps {
  items: NavigationItem[];
  activeId?: string;
  onItemClick?: (item: NavigationItem) => void;
  className?: string;
}

export const VerticalNavigation = ({
  items,
  activeId,
  onItemClick,
  className,
}: VerticalNavigationProps) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleItemClick = (item: NavigationItem) => {
    if (item.onClick) {
      item.onClick();
    }
    if (onItemClick) {
      onItemClick(item);
    }
  };

  return (
    <nav
      className={cn(
        "w-64 h-screen bg-nav border-r border-nav-border",
        "overflow-y-auto overflow-x-hidden",
        "shadow-apple-sm",
        className
      )}
    >
      <div className="p-4 space-y-1">
        {items.map((item) => {
          const isActive = activeId === item.id;
          const isHovered = hoveredId === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleItemClick(item)}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={cn(
                "w-full text-left px-4 py-3 rounded-lg",
                "transition-all duration-200 ease-apple",
                "font-medium text-sm",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20",
                isActive
                  ? "bg-nav-active text-nav-active-foreground shadow-apple-sm"
                  : isHovered
                  ? "bg-nav-hover text-nav-foreground"
                  : "text-nav-foreground hover:bg-nav-hover"
              )}
            >
              <span className="block truncate">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};