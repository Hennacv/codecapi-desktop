import { useContext } from 'react';
import { AuthContext } from 'renderer/root';
import Logo from './logo';
import SidebarLink from './sidebar-link';

function Sidebar() {
  const { user } = useContext(AuthContext);
  if (!user) {
    return null;
  }

  return (
    <div className="flex grow flex-col overflow-y-auto py-5 px-2 h-screen">
      <div className="flex shrink-0 w-28">
        <Logo />
      </div>
      <aside className="mt-5 flex flex-grow flex-col">
        {/* <p className="menu-label">Vragen</p> */}

        <ul className="space-y-1">
          <li>
            <SidebarLink to="/questions">Vragen</SidebarLink>
          </li>
          <li>
            <SidebarLink to="/questions/new">Vraag stellen</SidebarLink>
          </li>
        </ul>

        <hr className="border-t border-neutral-400 border-solid my-2" />

        {/* <p className="menu-label">Gebruikers</p> */}

        <ul className="space-y-1">
          <li>
            <SidebarLink to="/users">Gebruikers</SidebarLink>
          </li>
        </ul>
      </aside>
      <div className="flex shrink-0 border-t border-gray-200 p-4">
        <div className="flex items-center">
          <div>
            <img
              className="inline-block h-9 w-9 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
              User Name
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
