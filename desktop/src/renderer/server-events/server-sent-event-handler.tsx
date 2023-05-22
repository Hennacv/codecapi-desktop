import { useNavigate } from "react-router-dom"
import { bootstrapServerSentEvents } from "./bootstrap-server-sent-events"
import { useUserContext } from "renderer/hooks/use-user-context";
import { User } from "firebase/auth";
import { useEffect } from "react";

const ServerSideEventHandler = () => {
  const navigate = useNavigate()
  const { user } = useUserContext();

  useEffect(() => {
    if (user) {
      getUserToken(user);
    }
  }, [user]);

  const getUserToken = async (user: User) => {
    const token = await user.getIdToken();
    bootstrapServerSentEvents(navigate, token);
  }

  return null;
}

export default ServerSideEventHandler;