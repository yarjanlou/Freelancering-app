import { useEffect, useRef } from "react";

export default function useOutsideClick(onAction, eventCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onAction();
    };
    document.addEventListener("click", handleClick, eventCapturing);

    return () =>
      document.removeEventListener("click", handleClick, eventCapturing);
  }, [ref, onAction]);

  return ref;
}
