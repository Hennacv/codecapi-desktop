import { useEffect } from "react";

export const useScrollLock = (isShown: boolean) => {
  useEffect(() => {
    const scrollableElement = document.getElementById('main');

    if (scrollableElement) {
      scrollableElement.scrollTo({ top: 0, behavior: 'smooth' });
      scrollableElement.style.overflowY = isShown ? 'hidden' : 'visible';
    }
  }, [isShown]);

}