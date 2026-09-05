"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollFade = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tween = gsap.fromTo(
      el,
      { opacity: 0.1, filter: "blur(6px)", y: 24 },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          end: "top 45%",
          scrub: true,
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ScrollFade;