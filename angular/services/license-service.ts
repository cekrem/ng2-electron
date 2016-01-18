declare const nodeRequire;
const ipc = nodeRequire('electron').ipcRenderer;

export let license = ipc.sendSync('licenseQuery');