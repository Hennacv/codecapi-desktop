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
      className={`group flex items-center px-3 py-2 text-base font-normal border-l-4 rounded-md ${
        props.to === location.pathname
          ? 'bg-capi-green-200 border-capi-green-800 text-capi-green-800 '
          : 'border-transparent text-gray-600 hover:bg-gray-100 hover:text-capiblack'
      }`}
      to={props.to}
    >
      {props.children}
    </Link>
  );
}

export default SidebarLink;
