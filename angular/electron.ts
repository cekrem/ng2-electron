/// <reference path="./typings/github-electron.d.ts" />

declare const requireNative;

export const Electron: GitHubElectron.Electron = requireNative('electron');
export const Remote: GitHubElectron.Remote = Electron.remote;
