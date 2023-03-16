import { useContext, useState } from 'react';
import { AuthContext } from 'renderer/root';
import {
  RiQuestionAnswerLine,
  RiQuestionnaireLine,
  RiUser3Line,
  RiSettings3Line,
  RiArrowDropLeftLine,
} from 'react-icons/ri';
import { useSidebar } from 'renderer/hooks/use-sidebar';
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
  ToggleContainer,
} from './shared-styles.css';

function Sidebar() {
  const { toggleSideBar, isExpanded } = useSidebar();

  const { user } = useContext(AuthContext);
  if (!user) {
    return null;
  }

  return (
    <div className={isExpanded ? SideStyles.basic : SideStyles.collapsed}>
      <div className={isExpanded ? LogoStyle.basic : LogoStyle.collapsed}>
        <Logo isExpanded={isExpanded} />
      </div>
      <div
        className={
          isExpanded ? ToggleContainer.basic : ToggleContainer.collapsed
        }
      >
        <RiArrowDropLeftLine className={SideToggle} onClick={toggleSideBar} />
      </div>
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
