import React, { useEffect, useState } from "react";
import useWindow from "./useWindow";

export default function useImage(smImg, mdImg, lgImg) {
  const [image, setImage] = useState();
  const windowSize = useWindow();

  useEffect(() => {
    console.log(windowSize.width);
    setImage(() => {
      if (windowSize.width < 768) {
        return `src/${smImg?.substring(1)}`;
      } else if (windowSize.width < 1440) {
        return `src/${mdImg?.substring(1)}`;
      } else if (windowSize.width >= 1440) {
        return `src/${lgImg?.substring(1)}`;
      }
    });
  }, [windowSize.width, smImg, mdImg, lgImg]);
  return image;
}
