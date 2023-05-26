import { useState } from 'react';

export function useSidebar() {
  const [isExpanded, setIsExpanded] = useState(
    Boolean(localStorage.getItem('sidebar-isExpanded'))
  );

  const toggleSideBar = () => {
    if (isExpanded) {
      setIsExpanded(false);
      localStorage.setItem('sidebar-isExpanded', 'false');
      return;
    }
    setIsExpanded(true);
    localStorage.setItem('sidebar-isExpanded', 'true');
  };

  return { isExpanded, toggleSideBar };
}
