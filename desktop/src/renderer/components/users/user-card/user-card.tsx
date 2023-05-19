import { User } from "renderer/utils/types";
import { UserCardButtonContainer, UserCardContainer, UserCardFunction, UserCardImage, UserCardName } from "./user-card-styles.css";
import Button from "renderer/components/ui/button/button";
import { useNavigate } from "react-router-dom";

interface UserCard {
  user: User;
}

const UserCard = ({user}: UserCard) => {
  const navigate = useNavigate();
const goToProfile = () => {
  // navigate('/users/.....');
  // Once the profile ticket is approved I can add a redirect here
};

  return (
    <div key={user.id} className={UserCardContainer}>
      <div className={UserCardImage}>
        <p>{user?.name?.substring(0, 1)}</p>
      </div>
      <p className={UserCardName}>{user.name}</p>
      <p className={UserCardFunction}>JavaScript Developer</p>
      <div className={UserCardButtonContainer}>
        <Button
          text="More Information"
          type="button"
          variant="smallText"
          onClick= {() => goToProfile()}
        />
      </div>
    </div>
  );
}

export default UserCard;