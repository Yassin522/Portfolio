import { useEffect, useRef } from "react";

function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal-visible");
          observer.unobserve(el);
        }
      },
      // A ratio threshold penalises elements taller than the viewport: 15% of a
      // very tall box may never be on screen, so it reveals late (or not at all)
      // while a short neighbour in the same row has already settled. Pairing the
      // ratio with a 0 threshold and a bottom rootMargin means "15% visible, OR
      // scrolled meaningfully into view" — tall and short siblings reveal together.
      { threshold: [0, threshold], rootMargin: "0px 0px -12% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

export default useScrollReveal;
