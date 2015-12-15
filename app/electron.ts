/// <reference path="./typings/github-electron.d.ts" />

declare const requireNative;
export const electron: GitHubElectron.Electron = requireNative('electron');