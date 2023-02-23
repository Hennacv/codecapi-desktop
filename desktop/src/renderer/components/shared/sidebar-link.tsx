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
      className={`${
        props.to === location.pathname
          ? 'bg-capi-green-200 border-capi-green-800 text-capi-green-800 group flex items-center px-3 py-2 text-base font-normal border-l-4 rounded-md'
          : 'border-transparent text-gray-600 hover:bg-gray-100 hover:text-capiblack group flex items-center px-3 py-2 text-base font-normal border-l-4 rounded-md'
      }`}
      to={props.to}
    >
      {props.children}
    </Link>
  );
}

export default SidebarLink;
