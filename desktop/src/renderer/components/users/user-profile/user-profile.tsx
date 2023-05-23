import { useParams } from "react-router-dom";
import { UserCounter, UserCounterContainer, UserCounterTitle, UserProfileContainer, UserProfileEmail, UserProfileFunction, UserProfileHeader, UserProfileImage, UserProfileInfoContainer, UserProfileName, UserProfileTextContainer } from "./user-profile-styles.css";
import { useGetQuestions } from "renderer/hooks/use-get-questions";
import { useGetUser } from "renderer/hooks/use-get-user";
import UserSkills from "../user-skills/user-skills";

const UserProfile = () => {
  const { uid } = useParams();
  const { data: fetchedUser } = useGetUser(uid as string);
  const { data = [] } = useGetQuestions();

  if (!fetchedUser) {
    return null;
  }

  console.log(fetchedUser);

  const answers = data.map(question => question.answer).flat();
  const questionCounter = data.filter(question => question.user.uid === fetchedUser.uid).length;
  const answerCounter = answers.filter(answer => answer.user.uid === fetchedUser.uid).length;

  return (
    <div>
      <div className={UserProfileContainer}>
        <div className={UserProfileInfoContainer}>
            <p className={UserProfileImage}>{fetchedUser.name?.substring(0, 1)}</p>
          <div className={UserProfileTextContainer}>
            <label className={UserProfileName}>
              {fetchedUser.name}
            </label>
            <label className={UserProfileFunction}>
              JavaScript Developer
            </label>
            <label className={UserProfileEmail}>
              {fetchedUser.email}
            </label>
          </div>
        </div>
        <div className={UserCounterContainer}>
          <div>
            <label className={UserCounterTitle}>Questions</label>
            <p className={UserCounter}>{questionCounter}</p>
          </div>
          <div>
            <label className={UserCounterTitle}>Answers</label>
            <p className={UserCounter}>{answerCounter}</p>
          </div>
          <div>
            <label className={UserCounterTitle}>Accepted</label>
            <p className={UserCounter}>5</p>
          </div>
        </div>
      </div>
        <UserSkills skills={fetchedUser.tags}/>
      </div>

  );
}

export default UserProfile