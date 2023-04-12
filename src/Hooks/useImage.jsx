import React, { useEffect, useState } from "react";
import useWindow from "./useWindow";

export default function useImage(smImg, mdImg, lgImg) {
  const [image, setImage] = useState();
  const windowSize = useWindow();

  useEffect(() => {
    console.log(windowSize.width);
    setImage(() => {
      if (windowSize.width < 768) {
        return `src/${smImg?.substring()}`;
      } else if (windowSize.width < 1440) {
        return `src/${mdImg?.substring()}`;
      } else if (windowSize.width >= 1440) {
        return `src/${lgImg?.substring()}`;
      }
    });
  }, [windowSize.width, smImg, mdImg, lgImg]);
  return image;
}
