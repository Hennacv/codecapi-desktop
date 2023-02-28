import { useContext } from 'react';
import { AuthContext } from 'renderer/root';
import {
  RiQuestionAnswerLine,
  RiQuestionnaireLine,
  RiUser3Line,
} from 'react-icons/ri';
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
      <aside className="mt-5 flex grow flex-col">
        <ul className="space-y-1">
      <aside className="">
        <ul className="">
          <li>
            <SidebarLink to="/questions">
              <RiQuestionAnswerLine className="text-3xl shrink-0 mr-1.5 md:text-lg" />
              <span className="invisible md:visible">Vragen</span>
            </SidebarLink>
          </li>
          <li>
            <SidebarLink to="/questions/new">
              <RiQuestionnaireLine className="text-3xl shrink-0 mr-1.5 md:text-lg" />
              <span className="invisible md:visible">Vraag stellen</span>
            </SidebarLink>
          </li>
        </ul>

        <hr className="" />

        <ul className="">
          <li>
            <SidebarLink to="/users">
              <RiUser3Line className="text-3xl shrink-0 mr-1.5 md:text-lg" />
              <span className="invisible md:visible">Gebruikers</span>
            </SidebarLink>
          </li>
        </ul>
      </aside>
      <UserInfo />
    </div>
  );
}

export default Sidebar;
