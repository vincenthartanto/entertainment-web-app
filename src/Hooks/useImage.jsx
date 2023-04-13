import { useEffect, useState } from "react";
import useWindow from "./useWindow";

export default function useImage(smImg, mdImg, lgImg) {
  const [image, setImage] = useState();
  const windowSize = useWindow();

  useEffect(() => {
    console.log(windowSize.width);
    setImage(() => {
      if (windowSize.width < 768) {
        return `/${smImg?.substring(2)}`;
      } else if (windowSize.width < 1440) {
        return `/${mdImg?.substring(2)}`;
      } else if (windowSize.width >= 1440) {
        return `/${lgImg?.substring(2)}`;
      }
    });
  }, [windowSize.width, smImg, mdImg, lgImg]);
  return image;
}
