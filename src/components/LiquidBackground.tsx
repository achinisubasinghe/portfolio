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
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-background" />
      <div className="ether-wash absolute inset-0" />
      {!reduceMotion && (
        <div className="absolute inset-0">
          <LiquidEther
            colors={["#5ee7ff", "#9ef6ff", "#f4f8fb"]}
            autoDemo
            mouseForce={22}
            cursorSize={110}
            resolution={0.5}
            autoSpeed={0.55}
            autoIntensity={2.6}
          />
        </div>
      )}
    </div>
  );
}
