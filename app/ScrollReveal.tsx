"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./ScrollReveal.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
  highlightedWords = [],
}: {
  children: React.ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement | null>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
  highlightedWords?: string[];
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const highlightedSet = useMemo(
    () => new Set((highlightedWords ?? []).map((w) => w.toLowerCase())),
    [highlightedWords],
  );

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      const normalized = word.replace(/[^A-Za-z0-9']/g, "").toLowerCase();
      return (
        <span
          className={highlightedSet.has(normalized) ? "word word--hl" : "word"}
          key={index}
        >
          {word}
        </span>
      );
    });
  }, [children, highlightedSet]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.transform = "";
      const wordEls = el.querySelectorAll<HTMLElement>(".word");
      wordEls.forEach((w) => {
        w.style.opacity = "1";
        w.style.filter = "blur(0px)";
        w.style.transform = "";
      });
      return;
    }

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const wordElements = gsap.utils.toArray<HTMLElement>(
      el.querySelectorAll(".word"),
    );

    const timeline = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: el,
        scroller,
        start: "top 85%",
        end: "center center",
        scrub: true,
      },
    });

    timeline.fromTo(
      el,
      { transformOrigin: "0% 50%", rotate: baseRotation },
      { rotate: 0, duration: 0.2 },
      0,
    );

    const stagger = 0.15;

    wordElements.forEach((word, index) => {
      timeline.fromTo(
        word,
        {
          opacity: baseOpacity,
          filter: enableBlur ? `blur(${blurStrength}px)` : "blur(0px)",
          y: 10,
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 0.4,
        },
        index * stagger,
      );
    });

    return () => {
      timeline.scrollTrigger?.kill();
      timeline.kill();
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
  ]);

  return (
    <div ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <div className={`scroll-reveal-text ${textClassName}`}>{splitText}</div>
    </div>
  );
};

export default ScrollReveal;
