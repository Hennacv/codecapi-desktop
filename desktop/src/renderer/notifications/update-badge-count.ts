export const incrementBadgeCount = () => {
  window.electron.ipcRenderer.sendMessage("increment-badge-count", []);
};

export const setBadgeCount = (count: number) => {
  window.electron.ipcRenderer.sendMessage("set-badge-count", [count]);
};

