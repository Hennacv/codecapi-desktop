import { LogoStyle } from 'assets/logo/logo-styles.css';
import { useSidebar } from './use-sidebar';
import { RiArrowDropLeftLine } from 'react-icons/ri';
import {
  AsideStyles,
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
import IconUsers from 'assets/icons/icon-users';
import { useUserContext } from 'renderer/hooks/use-user-context';

const Sidebar = () => {
  const { toggleSideBar, isExpanded } = useSidebar();
  const { user } = useUserContext();

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
        <div>
          <ul className={SideList}>
            <SidebarLink to="/questions">
              <IconQuestions variant="default" />
              <span className={SideText}>Questions</span>
            </SidebarLink>
          </ul>
          <ul className={SideList}>
            <SidebarLink to="/users">
              <IconUsers variant="default" />
              <span className={SideText}>Users</span>
            </SidebarLink>
          </ul>
        </div>
        <div>
          <UserInfo isExpanded={isExpanded} to={`users/${user!.id}`}/>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
