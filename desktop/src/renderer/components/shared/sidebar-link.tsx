import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SideLink, SideLinkSelected } from './shared-styles.css';

interface SidebarLinkProps {
  to: string;
  children: ReactNode;
}

function SidebarLink({ to, children }: SidebarLinkProps) {
  const location = useLocation();
  const sideLink = classNames(SideLink, {
    [SideLinkSelected]: to === location.pathname,
  });

  return (
    <Link className={sideLink} to={to}>
      {children}
    </Link>
  );
}

export default SidebarLink;
