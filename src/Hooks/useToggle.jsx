import React, { useState } from "react";

export default function useToggle(value) {
  const [isToggle, setIsToggle] = useState(value);

  function changeToggle() {
    setIsToggle((toggle) => !toggle);
  }
  function changeToggleTrue() {
    setIsToggle(true);
  }
  function changeToggleFalse() {
    setIsToggle(false);
  }
  return { isToggle, changeToggle, changeToggleTrue, changeToggleFalse };
}
