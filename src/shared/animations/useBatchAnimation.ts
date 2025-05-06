'use client'
import { useEffect } from "react";
import SplitText from '@/shared/libs/SplitText';
import gsap from "gsap";

export const CLASS_SCROLL_BLOCK = 'scroll-block'
export const CLASS_TEXT_ANIMATION = 'scroll-text'
export const CLASS_TRIGGERED = 'triggered'

gsap.registerPlugin(SplitText)

export const useBatchAnimation = (containerSelector: string, elementSelector: string, className: string, threshold = 0.5) => {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const container = document.querySelector(containerSelector);
    if (!container) return;

    const elements = container.querySelectorAll(elementSelector);

    for (const element of elements) {
      if (element.classList.contains(CLASS_TEXT_ANIMATION)) {
        const split = new SplitText(element, {
          type: 'lines, words',
          wordsClass: 'scroll-word',
          linesClass: 'scroll-line',
        });

        const lines = split.lines;
        let delay = 0;
        for (const line of lines) {
          const words = Array.from(line.querySelectorAll('.scroll-word'));
          for (const word of words) {
            (word as HTMLElement).style.transition = `transform 1.2s cubic-bezier(0.5,0,0,1) ${delay}s`;
          }
          delay += 0.2;
        }
      }
    }



    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add(className);
        } else {
          // gsap.to(entry.target, { opacity: 0, y: 20 }); // Reset animation on exit

          // entry.target.classList.remove(className);
        }
      });
    }, { threshold });

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [containerSelector, elementSelector, className, threshold]);
};
