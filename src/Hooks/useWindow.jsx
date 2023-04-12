import React, { useEffect, useState } from "react";

export default function useWindow() {
  const [size, setSize] = useState({ height: 0, width: 0 });
  useEffect(() => {
    function handleResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
