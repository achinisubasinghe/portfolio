"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const LiquidEther = dynamic(() => import("@/components/bits/LiquidEther"), {
  ssr: false,
});

export function LiquidBackground() {
  const [reduceMotion, setReduceMotion] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[var(--z-bg)] overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-background" />
      <div className="ether-wash absolute inset-0" />
      {!reduceMotion && (
        <div className="absolute inset-0 opacity-55">
          <LiquidEther
            colors={["#1e5668", "#4fa6ba", "#88c8d8"]}
            autoDemo
            mouseForce={18}
            cursorSize={100}
            resolution={0.45}
            autoSpeed={0.38}
            autoIntensity={1.65}
          />
        </div>
      )}
      <div className="ether-scrim absolute inset-0" />
      <div className="grain-overlay fixed inset-0 z-[var(--z-grain)]" />
    </div>
  );
}
