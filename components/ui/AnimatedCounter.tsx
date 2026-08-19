"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  isCurrency?: boolean;
}

export default function AnimatedCounter({ 
  value, 
  prefix = "", 
  suffix = "", 
  duration = 2,
  isCurrency = false
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 }); // changed to once: false

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: duration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate(latest) {
          if (ref.current) {
            const num = Math.floor(latest);
            const formatted = isCurrency 
              ? new Intl.NumberFormat("es-CO").format(num) 
              : num.toString();
            ref.current.textContent = prefix + formatted + suffix;
          }
        }
      });
      return () => controls.stop();
    } else {
      if (ref.current) {
        ref.current.textContent = prefix + "0" + suffix;
      }
    }
  }, [isInView, value, prefix, suffix, duration, isCurrency]);

  return <span ref={ref}>0{suffix}</span>;
}
