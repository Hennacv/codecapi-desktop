export const sendNotification = (
  title: string,
  message: string,
  redirect?: string
) => {
  window.electron.ipcRenderer.sendMessage('new-message', [
    title,
    message,
    redirect,
  ]);
};
