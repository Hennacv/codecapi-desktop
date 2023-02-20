import { useContext } from 'react';
import { AuthContext } from 'renderer/root';
import SidebarLink from './sidebar-link';

function Sidebar() {
  const { user } = useContext(AuthContext);
  if (!user) {
    return null;
  }

  return (
    <aside className="text-base bg-white p-3 fixed min-w-side h-full z-1 mt-20 shadow-side">
      {/* <p className="menu-label">Vragen</p> */}

      <ul>
        <li>
          <SidebarLink to="/questions">Vragen</SidebarLink>
        </li>
        <li>
          <SidebarLink to="/questions/new">Vraag stellen</SidebarLink>
        </li>
      </ul>

      <hr className="border-t border-neutral-400 border-solid my-2" />

      {/* <p className="menu-label">Gebruikers</p> */}

      <ul>
        <li>
          <SidebarLink to="/users">Gebruikers</SidebarLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
