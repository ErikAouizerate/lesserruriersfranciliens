import { useEffect } from 'react';
import { useLocation } from 'react-router';

// Reveals [data-reveal] elements as they scroll into view (styles in index.css).
// Elements already visible when the page loads are left alone, so nothing flashes.
export function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.revealState = 'in';
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    );

    // Measured from the top of the document: on page change ScrollToTop scrolls back
    // smoothly, so the current scroll position is not the one the page will be read at.
    const fold = window.innerHeight * 0.92;
    for (const el of document.querySelectorAll<HTMLElement>('[data-reveal]')) {
      const state = el.dataset.revealState;
      if (state === 'in') continue;
      if (state === 'pending' || el.getBoundingClientRect().top + window.scrollY > fold) {
        el.dataset.revealState = 'pending';
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
