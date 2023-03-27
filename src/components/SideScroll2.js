import { useRef, useEffect } from "react";

const syntheticEvent = new WheelEvent("syntheticWheel", {
    deltaY: 4,
    deltaMode: 0,
  });

export function useHorizontalScroll2() {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = e => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "smooth"
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}