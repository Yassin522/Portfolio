import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to the section named by the URL hash. Waits for `ready` because the
// preloader locks scrolling for its first 1.2s, and a scroll issued while the
// body is fixed is silently dropped.
function HashRedirect({ ready }) {
  const { hash } = useLocation();

  useEffect(() => {
    if (!ready) return;

    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }

    const el = document.getElementById(hash.slice(1));
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash, ready]);

  return null;
}

export default HashRedirect;
