import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarLinkProps {
  to: string;
  children: ReactNode;
}

function SidebarLink(props: SidebarLinkProps) {
  const location = useLocation();

  return (
    <Link
      className={`${props.to === location.pathname ? 'is-active' : ''}`}
      to={props.to}
    >
      {props.children}
    </Link>
  );
}

export default SidebarLink;
