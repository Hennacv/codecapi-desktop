import { useContext, useState } from 'react';
import { AuthContext } from 'renderer/root';
import { LogoStyle } from 'assets/logo/logo-styles.css';
import { useSidebar } from './use-sidebar';
import {
  RiArrowDropLeftLine,
} from 'react-icons/ri';
import {
  AsideStyles,
  SideIcon,
  SideList,
  SideStyles,
  SideText,
  SideToggle,
  ToggleContainer,
} from './sidebar-styles.css';

import UserInfo from '../../users/user-info/user-info';
import Logo from '../../../../assets/logo/logo';
import SidebarLink from '../sidebar-link/sidebar-link';
import IconQuestions from 'assets/icons/icon-questions';
import IconUser from 'assets/icons/icon-users';
import IconSettings from 'assets/icons/icon-settings';

const Sidebar = () => {
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
              <IconQuestions variant='default'/>
              <span className={SideText}>Questions</span>
            </SidebarLink>
          </li>
          <li>
            <SidebarLink to="/questions/new">
              <IconQuestions variant='default'/>
              <span className={SideText}>Ask Question</span>
            </SidebarLink>
          </li>
          <li>
            <SidebarLink to="/users">
              <IconUser variant='default'/>
              <span className={SideText}>Users</span>
            </SidebarLink>
          </li>
        </ul>

        <div>
          <ul className={SideList}>
            <li>
              <SidebarLink to="/">
                <IconSettings variant='default'/>
                <span className={SideText}>Settings</span>
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
