import { useNavigate, useParams } from 'react-router-dom';
import {
  UserCounter,
  UserCounterContainer,
  UserCounterTitle,
  UserProfileContainer,
  UserProfileDescription,
  UserProfileDescriptionContainer,
  UserProfileEditButton,
  UserProfileEmail,
  UserProfileFunction,
  UserProfileHeader,
  UserProfileImage,
  UserProfileInfoContainer,
  UserProfileName,
  UserProfileSeparator,
  UserProfileTextContainer,
} from './user-profile-styles.css';
import UserSkills from '../user-skills/user-skills';
import { useGetProfile } from 'renderer/hooks/use-get-profile';
import Button from 'renderer/components/ui/button/button';
import IconEdit from 'assets/icons/icon-edit';
import { useUserContext } from 'renderer/hooks/use-user-context';
import { useTranslation } from 'react-i18next';

const UserProfile = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { data: profile } = useGetProfile(parseInt(id!));
  const { user } = useUserContext();
  const navigate = useNavigate();

  if (!profile) {
    return null;
  }

  const {
    user: { name, jobtitle, email, description, tags, uid, team },
    questionCount,
    answerCount,
    acceptedAnswerCount,
  } = profile;

  return (
    <div>
      <div className={UserProfileContainer}>
        <div className={UserProfileInfoContainer}>
          <p className={UserProfileImage}>{name?.substring(0, 1)}</p>
          <div className={UserProfileTextContainer}>
            <label className={UserProfileName}>{name}</label>
            <label className={UserProfileFunction}>{jobtitle}</label>
            {user.team === 'none' ? (
              <label className={UserProfileEmail}>{t('common.teamless')}</label>
            ) : (
              <label className={UserProfileEmail}>{t('common.team')} {team}</label>
            )}
            <label className={UserProfileEmail}>{email}</label>
          </div>
        </div>
        <div className={UserCounterContainer}>
          <div>
            <label className={UserCounterTitle}>
              {t('user.profile.statistic.question')}
            </label>
            <p className={UserCounter}>{questionCount}</p>
          </div>
          <div>
            <label className={UserCounterTitle}>
              {t('user.profile.statistic.answer')}
            </label>
            <p className={UserCounter}>{answerCount}</p>
          </div>
          <div>
            <label className={UserCounterTitle}>
              {t('user.profile.statistic.accepted')}
            </label>
            <p className={UserCounter}>{acceptedAnswerCount}</p>
          </div>
        </div>
        <div className={UserProfileDescriptionContainer}>
          <hr className={UserProfileSeparator} />
          <label className={UserProfileHeader}>{t('common.description')}</label>
          <p className={UserProfileDescription}>
            {description || t('user.edit.placeholder.description')}
          </p>
        </div>
      </div>
      <UserSkills skills={tags} />
      {profile?.user.uid === user?.uid && (
        <div className={UserProfileEditButton}>
          <Button
            type="button"
            variant="small"
            onClick={() => navigate(`/users/edit/${id}`)}
          >
            <p>{t('user.profile.button.navigate')}</p>
            <IconEdit variant="default" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
