import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  SideItem,
  SideItemSelected,
  SideLink,
  SideLinkContent,
} from './sidebar-link-styles.css';

interface SidebarLinkProps {
  to: string;
  children: ReactNode;
}

const SidebarLink = ({ to, children }: SidebarLinkProps) => {
  const location = useLocation();
  const sideItem = classNames(SideItem, {
    [SideItemSelected]: to === location.pathname,
  });

  return (
    <li className={sideItem}>
      <Link className={SideLink} to={to}>
        <div className={SideLinkContent}>{children}</div>
      </Link>
    </li>
  );
};

export default SidebarLink;
