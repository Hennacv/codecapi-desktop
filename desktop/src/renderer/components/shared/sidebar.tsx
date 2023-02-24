import { useContext } from 'react';
import { AuthContext } from 'renderer/root';
import UserInfo from '../users/user-info';
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
        <ul className="space-y-1">
          <li>
            <SidebarLink to="/questions">Vragen</SidebarLink>
          </li>
          <li>
            <SidebarLink to="/questions/new">Vraag stellen</SidebarLink>
          </li>
        </ul>

        <hr className="border-t border-neutral-400 border-solid my-2" />

        <ul className="space-y-1">
          <li>
            <SidebarLink to="/users">Gebruikers</SidebarLink>
          </li>
        </ul>
      </aside>
      <UserInfo />
    </div>
  );
}

export default Sidebar;
