import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  to: string;
  children: ReactNode;
}

function SidebarLink(props: Props) {
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
