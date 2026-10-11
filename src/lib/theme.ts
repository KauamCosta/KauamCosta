import { useSyncExternalStore } from "react";

type Theme = "dark" | "light";
const storageKey = "theme-v2";
let theme: Theme = "dark";
let transitioning = false;
const listeners = new Set<() => void>();

function applyTheme(next: Theme) {
  document.documentElement.classList.toggle("dark", next === "dark");
  document.documentElement.dataset.theme = next;
  document.documentElement.style.colorScheme = next;
  document.querySelector('meta[name="color-scheme"]')?.setAttribute("content", next);
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", next === "dark" ? "#08101f" : "#edf2f8");
}

export function initializeTheme() {
  try {
    theme = localStorage.getItem(storageKey) === "light" ? "light" : "dark";
  } catch {
    theme = "dark";
  }
  applyTheme(theme);
}

function setTheme(next: Theme) {
  theme = next;
  applyTheme(next);
  try {
    localStorage.setItem(storageKey, next);
  } catch {
    // Keep the selection usable when browser storage is unavailable.
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => { listeners.delete(listener); };
}

export function useTheme() {
  return useSyncExternalStore(subscribe, () => theme, () => "dark" as Theme);
}

export function toggleTheme(origin: HTMLElement) {
  if (transitioning) return;
  const next = theme === "dark" ? "light" : "dark";
  if (!document.startViewTransition || matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setTheme(next);
    return;
  }

  const bounds = origin.getBoundingClientRect();
  const x = bounds.left + bounds.width / 2;
  const y = bounds.top + bounds.height / 2;
  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  transitioning = true;
  const transition = document.startViewTransition(() => setTheme(next));
  void transition.ready.then(() => {
    document.documentElement.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
      { duration: 650, easing: "ease-in-out", pseudoElement: "::view-transition-new(root)" },
    );
  }).catch(() => {});
  void transition.finished.finally(() => { transitioning = false; }).catch(() => {});
}
