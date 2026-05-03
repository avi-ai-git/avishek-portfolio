import { useState, useEffect, useCallback, useRef } from "react";
import { useLocation } from "wouter";

const TOUR_SEQUENCE = [
  { path: "/", label: "Home" },
  { path: "/work", label: "Work" },
  { path: "/work/ctrl-alt-deity", label: "Film" },
  { path: "/work/fractal-breaths", label: "Prototype" },
  { path: "/work/far-out", label: "Far Out" },
  { path: "/work/hikemussbleiben", label: "Campaign" },
  { path: "/work/ai-bootcamp", label: "Teach" },
  { path: "/work/ai-tool-month", label: "AI Tool" },
  { path: "/lab", label: "Lab" },
];

const SCROLL_PX_PER_FRAME = 1.5;
const PAUSE_AT_TOP_MS = 1200;
const PAUSE_AT_BOTTOM_MS = 2000;

export function DemoTour() {
  const [isRunning, setIsRunning] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [, navigate] = useLocation();

  const rafRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const activeRef = useRef(false);

  const cancel = () => {
    activeRef.current = false;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const stopTour = useCallback(() => {
    cancel();
    setIsRunning(false);
    setPageIndex(0);
  }, []);

  const scrollPage = useCallback((onDone: () => void) => {
    const tick = () => {
      if (!activeRef.current) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY >= max - 2) {
        timeoutRef.current = window.setTimeout(onDone, PAUSE_AT_BOTTOM_MS);
      } else {
        window.scrollBy(0, SCROLL_PX_PER_FRAME);
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    timeoutRef.current = window.setTimeout(() => {
      if (activeRef.current) rafRef.current = requestAnimationFrame(tick);
    }, PAUSE_AT_TOP_MS);
  }, []);

  useEffect(() => {
    if (!isRunning) return;

    activeRef.current = true;
    window.scrollTo({ top: 0 });

    scrollPage(() => {
      if (!activeRef.current) return;
      const next = pageIndex + 1;
      if (next >= TOUR_SEQUENCE.length) {
        stopTour();
      } else {
        navigate(TOUR_SEQUENCE[next].path);
        setPageIndex(next);
      }
    });

    return cancel;
  }, [isRunning, pageIndex]);

  const startTour = () => {
    cancel();
    setPageIndex(0);
    navigate(TOUR_SEQUENCE[0].path);
    window.scrollTo({ top: 0 });
    setIsRunning(true);
  };

  const current = TOUR_SEQUENCE[pageIndex];

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-2 pointer-events-none">
      {isRunning && (
        <div className="pointer-events-auto flex items-center gap-3 bg-black/80 border border-white/10 text-white font-mono text-[10px] px-3 py-2 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shrink-0" />
          <span className="tracking-widest uppercase">
            {pageIndex + 1} / {TOUR_SEQUENCE.length} &mdash; {current.label}
          </span>
          <button
            onClick={stopTour}
            className="ml-2 text-white/50 hover:text-white transition-colors text-base leading-none"
            title="Stop tour"
          >
            ■
          </button>
        </div>
      )}

      <button
        onClick={isRunning ? stopTour : startTour}
        className={`pointer-events-auto font-mono text-[11px] tracking-widest uppercase px-4 py-2.5 transition-all border ${
          isRunning
            ? "bg-primary border-primary text-white"
            : "bg-black/70 border-white/20 text-white hover:bg-primary hover:border-primary backdrop-blur-sm"
        }`}
      >
        {isRunning ? "■ Stop" : "▶ Tour"}
      </button>
    </div>
  );
}
