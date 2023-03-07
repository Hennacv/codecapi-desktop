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
    <div className="">
      <div className="">
        <Logo />
      </div>
      <aside className="">
        <ul className="">
          <li>
            <SidebarLink to="/questions">Vragen</SidebarLink>
          </li>
          <li>
            <SidebarLink to="/questions/new">Vraag stellen</SidebarLink>
          </li>
        </ul>

        <hr className="" />

        <ul className="">
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
