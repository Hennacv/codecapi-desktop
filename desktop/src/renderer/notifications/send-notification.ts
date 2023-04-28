export const sendNotification = (title: string, message: string) => {
  window.electron.ipcRenderer.sendMessage('new-message', [title, message]);
}