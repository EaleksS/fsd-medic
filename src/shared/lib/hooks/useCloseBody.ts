import { useEffect } from "react";

export const useCloseBody = (setIsActive: (bool: boolean) => void) => {
  const handleClickClose = () => {
    setIsActive(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleClickClose);

    return () => {
      window.removeEventListener("click", handleClickClose);
    };
  }, []);

  return;
};
