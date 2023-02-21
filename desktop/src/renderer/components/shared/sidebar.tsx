import { useContext } from 'react';
import { AuthContext } from 'renderer/root';
import SidebarLink from './sidebar-link';

function Sidebar() {
  const { user } = useContext(AuthContext);
  if (!user) {
    return null;
  }

  return (
    <aside className="menu has-background-white p-3 sidebar sidebar-shadow">
      <p className="menu-label">Vragen</p>

      <ul className="menu-list">
        <li>
          <SidebarLink to="/questions">Overzicht</SidebarLink>
        </li>
        <li>
          <SidebarLink to="/questions/new">Vraag stellen</SidebarLink>
        </li>
      </ul>

      <p className="menu-label">Gebruikers</p>

      <ul className="menu-list">
        <li>
          <SidebarLink to="/users">Overzicht</SidebarLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
