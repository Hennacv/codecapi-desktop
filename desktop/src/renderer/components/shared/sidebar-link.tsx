import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  SideLink,
  SideLinkBaseStyle,
  SideLinkSelected,
} from './shared-styles.css';

interface SidebarLinkProps {
  to: string;
  children: ReactNode;
}

function SidebarLink(props: SidebarLinkProps) {
  const location = useLocation();

  return (
    <Link
      className={`${SideLink} ${
        props.to === location.pathname ? SideLinkSelected : SideLinkBaseStyle
      }`}
      to={props.to}
    >
      {props.children}
    </Link>
  );
}

export default SidebarLink;
