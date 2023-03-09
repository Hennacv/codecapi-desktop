import { useContext } from 'react';
import { AuthContext } from 'renderer/root';
import {
  RiQuestionAnswerLine,
  RiQuestionnaireLine,
  RiUser3Line,
  RiSettings3Line,
} from 'react-icons/ri';
import UserInfo from '../users/user-info';
import Logo from './logo';
import SidebarLink from './sidebar-link';
import {
  LogoStyle,
  SideIcon,
  SideList,
  SideStyles,
  SideText,
} from './shared-styles.css';

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
      <aside>
        <ul className={SideList.top}>
          <li>
            <SidebarLink to="/questions">
              <RiQuestionAnswerLine className={SideIcon} />
              <span className={SideText}>Vragen</span>
            </SidebarLink>
          </li>
          <li>
            <SidebarLink to="/questions/new">
              <RiQuestionnaireLine className={SideIcon} />
              <span className={SideText}>Vraag stellen</span>
            </SidebarLink>
          </li>
          <li>
            <SidebarLink to="/users">
              <RiUser3Line className={SideIcon} />
              <span className={SideText}>Gebruikers</span>
            </SidebarLink>
          </li>
        </ul>

        {/* <hr className="" /> */}

        <ul className={SideList.bottom}>
          <li>
            <SidebarLink to="/">
              <RiSettings3Line className={SideIcon} />
              <span className={SideText}>Instellingen</span>
            </SidebarLink>
          </li>
        </ul>
      </aside>
      <UserInfo />
    </div>
  );
}

export default Sidebar;
