# Building a Real-Time Sketch Drawing Sync App with Firebase and React

## ✍️ Overview

This project explores how to build a **real-time collaborative drawing app** using **React** and **Firebase**. Users can draw on a canvas and instantly sync their sketches with others, creating a seamless interactive experience.

Key features include:

* Canvas drawing with pen and eraser tools
* Firebase Firestore for real-time sync
* Local deduplication of paths to avoid redundant sync
* Export canvas as PNG
* Persistent session history using `localStorage`

---

## 🧠 Core Concepts

At its heart, the app allows users to collaboratively draw, with every stroke saved and reflected in real-time across all connected clients. To achieve this, we focus on:

* **Efficient drawing state management**
* **Firebase snapshot listeners for sync**
* **Client-side deduplication**
* **Exporting and persisting sketches**


## 🖍️ Real-Time Drawing Engine

### Canvas Drawing with Tools

Drawing is implemented using the HTML Canvas API inside a `ref`, with the ability to draw `pen` or `eraser` strokes.

From `App.jsx`:

```jsx
const handleMouseDown = (e) => {
  drawing.current = true;
  const rect = canvasRef.current.getBoundingClientRect();
  currentPath.current = [
    {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      tool: toolRef.current
    }
  ];
};
```

### Rendering Logic

Paths are rendered in real-time using the `renderPaths` function. Each stroke is either drawn or erased depending on its `tool` value.

```jsx
ctx.beginPath();
ctx.moveTo(path[0].x, path[0].y);
path.forEach((point) => {
  ctx.lineTo(point.x, point.y);
});
ctx.stroke();
```

---

## 🔁 Real-Time Firebase Sync

When users draw, their paths are pushed to Firebase:

```js
await updateDoc(ref, {
  data: arrayUnion(currentPath.current),
});
```

And others receive them through:

```js
onSnapshot(ref, (doc) => {
  const newData = doc.data()?.data || [];
  setData((prev) => deduplicatePaths(newData, prev));
});
```

---

## 📦 Deduplication and Local Storage

A subtle but **critical part** of this app is preventing redraws or Firebase overload due to repeated paths. This is handled in `util.ts`.

### `deepEqualPath` – Compare Stroke Paths

```ts
function deepEqualPath(a: any[], b: any[]) {
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length !== b.length) return false;

  return a.every((point, i) => (
    point.x === b[i].x &&
    point.y === b[i].y &&
    point.tool === b[i].tool
  ));
}
```

### `deduplicatePaths`

This function merges existing and incoming paths, skipping duplicates while preserving intentional gaps:

```ts
const combined = existingDataParsed.concat(paths);
for (const path of combined) {
  if (path.length === 0 || !deepEqualPath(path, lastNonEmpty)) {
    deduped.push(path);
  }
}
```

### `appendToLS`

To preserve history locally in the browser:

```ts
export const appendToLS = (key: string, newPath: Point[]) => {
  const existing: Point[][] = JSON.parse(localStorage.getItem(key) || '[]');
  const updated = [...existing, newPath];
  localStorage.setItem(key, JSON.stringify(updated));
}
```

---

## 🖼️ Export to PNG

Users can save their canvas as an image with:

```ts
export const exportPng = (dataUrl: string) => {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = 'canvas-image.png';
  link.click();
};
```

This feature allows you to **download your collaborative artwork** for offline sharing or archiving.

---

## 🔌 Data Types and Consistency

In `types.ts`, we define strict typing for drawing points and strokes:

```ts
export type Tool = 'pen' | 'eraser';

export type Point = { x: number; y: number, tool: Tool };

export type Stroke = {
  points: Point[],
  clientId: string
};
```

This provides clean data boundaries and consistency in both drawing logic and database updates.

---

## 🧪 Future Enhancements

Here are a few ways to evolve this app further:

* **Real-time cursor tracking** (see other user's cursors)
* **Undo/Redo functionality**
* **Export to SVG**
* **Multi-room capability for larger teams**
* **Firebase Storage for replay history**

---

## 🧵 Conclusion

This project demonstrates how to build an intuitive and real-time collaborative whiteboard using **React**, **Firebase**, and **TypeScript** utilities. From smart path deduplication to local persistence and exporting features, this app brings together modern web tools to enable seamless digital sketching.

Feel free to adapt the logic in your own collaborative tools, remote education platforms, or team brainstorming environments.

---
