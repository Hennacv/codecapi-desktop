import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const navigate = useNavigate();

  window.electron.ipcRenderer.on("new-message", (route) => {
    // @ts-ignore
    navigate(route);
  });

  return;
}

export default Notifications;