import { LogoStyle } from 'assets/logo/logo-styles.css';
import { useSidebar } from './use-sidebar';
import { RiArrowDropLeftLine } from 'react-icons/ri';
import {
  AsideStyles,
  SideList,
  SideListItem,
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
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
  const {t} = useTranslation();
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
        <div className={SideList}>
          <div className={SideListItem}>
            <SidebarLink to="/questions">
              <IconQuestions variant="default" />
              <span className={SideText}>{t('sidemenu.title.questions')}</span>
            </SidebarLink>
          </div>
          <div className={SideListItem}>
            <SidebarLink to="/users">
              <IconUsers variant="default" />
              <span className={SideText}>{t('sidemenu.title.users')}</span>
            </SidebarLink>
          </div>
        </div>
        <div>
          <UserInfo isExpanded={isExpanded} to={`users/${user!.id}`} />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
