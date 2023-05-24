import { useNavigate } from "react-router-dom"
import { bootstrapServerSentEvents } from "./bootstrap-server-sent-events"
import { useUserContext } from "renderer/hooks/use-user-context";
import { User as FirebaseUser } from "firebase/auth";
import { useEffect } from "react";

const ServerSideEventHandler = () => {
  const navigate = useNavigate()
  const { firebaseUser } = useUserContext();

  useEffect(() => {
    if (firebaseUser) {
      getUserToken(firebaseUser);
    }
  }, [firebaseUser]);

  const getUserToken = async (firebaseUser: FirebaseUser) => {
    const token = await firebaseUser.getIdToken();
    bootstrapServerSentEvents(navigate, token);
  }

  return null;
}

export default ServerSideEventHandler;