import { useEffect } from "react";
import { useRef } from "react";

function useOutsideClick(handler, listionCaptioring = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }
    document.addEventListener("click", handleClick, listionCaptioring);

    return () => {
      document.removeEventListener("click", handleClick, listionCaptioring);
    };
  }, [handler, listionCaptioring]);

  return ref;
}

export default useOutsideClick;
