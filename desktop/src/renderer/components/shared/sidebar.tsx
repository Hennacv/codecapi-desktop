import { useContext, useState } from 'react';
import { AuthContext } from 'renderer/root';
import {
  RiQuestionAnswerLine,
  RiQuestionnaireLine,
  RiUser3Line,
  RiSettings3Line,
  RiMenuFill,
} from 'react-icons/ri';
import UserInfo from '../users/user-info';
import Logo from './logo';
import SidebarLink from './sidebar-link';
import {
  AsideStyles,
  LogoStyle,
  SideIcon,
  SideList,
  SideStyles,
  SideText,
  SideToggle,
} from './shared-styles.css';

function Sidebar() {
  const sidebarCollapsed = localStorage.getItem('sidebar-collapsed');
  const [isExpanded, setIsExpanded] = useState(!sidebarCollapsed);

  const { user } = useContext(AuthContext);
  if (!user) {
    return null;
  }

  const handleToggler = () => {
    if (isExpanded) {
      setIsExpanded(false);
      localStorage.setItem('sidebar-collapsed', true);
      return;
    }
    setIsExpanded(true);
    localStorage.removeItem('sidebar-collapsed');
  };

  return (
    <div className="">
      <div className="">
        <Logo />
      </div>
      <RiMenuFill className={SideToggle} onClick={handleToggler} />
      <aside className={AsideStyles}>
        <ul className={SideList}>
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
        <div>
          <ul className={SideList}>
            <li>
              <SidebarLink to="/">
                <RiSettings3Line className={SideIcon} />
                <span className={SideText}>Instellingen</span>
              </SidebarLink>
            </li>
          </ul>
          <UserInfo isExpanded={isExpanded} />
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
