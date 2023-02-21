import { useContext } from 'react';
import { AuthContext } from 'renderer/root';
import SidebarLink from './sidebar-link';

function Sidebar() {
  const { user } = useContext(AuthContext);
  if (!user) {
    return null;
  }

  return (
    <aside className="text-base py-6 px-2 md:col-span-3 md:py-0 md:px-0">
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
  );
}

export default Sidebar;
