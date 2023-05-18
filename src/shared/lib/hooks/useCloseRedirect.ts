import { useMemo } from "react";

export const useCloseRedirect = (setIsActive: (bool: boolean) => void) => {
  useMemo(() => {
    const timer = setTimeout(() => {
      setIsActive(false);
    });

    return () => clearTimeout(timer);
  }, [window.location.pathname]);
};
