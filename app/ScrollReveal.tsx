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
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

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

    const rotationTween = gsap.fromTo(
      el,
      { transformOrigin: "0% 50%", rotate: baseRotation },
      {
        ease: "none",
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom",
          end: rotationEnd,
          scrub: true,
        },
      },
    );

    const wordElements = gsap.utils.toArray<HTMLElement>(
      el.querySelectorAll(".word"),
    );

    wordElements.forEach((word, index) => {
      const startPercent = 95 - index * 7;
      const endPercent = 60 - index * 5;

      gsap.fromTo(
        word,
        {
          opacity: baseOpacity,
          filter: enableBlur ? `blur(${blurStrength}px)` : "blur(0px)",
          y: 10,
          rotate: baseRotation * 0.3,
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          rotate: 0,
          ease: "none",
          scrollTrigger: {
            trigger: word,
            scroller,
            start: `top ${startPercent}%`,
            end: `top ${endPercent}%`,
            scrub: true,
          },
        },
      );
    });

    return () => {
      rotationTween.scrollTrigger?.kill();
      wordElements.forEach((word) => {
        gsap.killTweensOf(word);
        const trigger = ScrollTrigger.getAll().find(
          (item) => item.trigger === word,
        );
        trigger?.kill();
      });
      gsap.killTweensOf(el);
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
