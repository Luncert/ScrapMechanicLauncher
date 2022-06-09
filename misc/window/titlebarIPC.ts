/**
 * Copyright (c) 2021, Guasam
 *
 * This software is provided "as-is", without any express or implied warranty. In no event
 * will the authors be held liable for any damages arising from the use of this software.
 * Read the LICENSE file for more details.
 *
 * @author  : guasam
 * @project : Electron Window
 * @package : Titlebar IPC (Main Process)
 */

import { WINDOW_STATE } from '@common/Constants';
import { BrowserWindow, ipcMain, shell } from 'electron';


function fetchWindowState(mainWindow: BrowserWindow) {
  if (mainWindow.isFullScreen()) {
      return WINDOW_STATE.FULLSCREEN;
  }
  if (mainWindow.isMaximized()) {
      return WINDOW_STATE.MAXIMIZED;
  }
  if (mainWindow.isMinimized()) {
      return WINDOW_STATE.MINIMIZED;
  }
  if (!mainWindow.isVisible()) {
      return WINDOW_STATE.HIDDEN;
  }
  return WINDOW_STATE.NORMAL;
}

export const registerTitlebarIpc = (mainWindow: BrowserWindow) => {
  ipcMain.on('fetch-window-state', (evt) => {
    evt.returnValue = fetchWindowState(mainWindow);
  });
  
  ipcMain.on('window-minimize', (evt) => {
    mainWindow.minimize();
    evt.returnValue = fetchWindowState(mainWindow);
  });

  ipcMain.on('window-maximize', (evt) => {
    mainWindow.maximize();
    evt.returnValue = fetchWindowState(mainWindow);
  });

  ipcMain.on('window-toggle-maximize', (evt) => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
    evt.returnValue = fetchWindowState(mainWindow);
  });

  ipcMain.on('window-close', (evt) => {
    mainWindow.close();
    evt.returnValue = WINDOW_STATE.HIDDEN;
  });

  ipcMain.handle('web-undo', () => {
    mainWindow.webContents.undo();
  });

  ipcMain.handle('web-redo', () => {
    mainWindow.webContents.redo();
  });

  ipcMain.handle('web-cut', () => {
    mainWindow.webContents.cut();
  });

  ipcMain.handle('web-copy', () => {
    mainWindow.webContents.copy();
  });

  ipcMain.handle('web-paste', () => {
    mainWindow.webContents.paste();
  });

  ipcMain.handle('web-delete', () => {
    mainWindow.webContents.delete();
  });

  ipcMain.handle('web-select-all', () => {
    mainWindow.webContents.selectAll();
  });

  ipcMain.handle('web-reload', () => {
    mainWindow.webContents.reload();
  });

  ipcMain.handle('web-force-reload', () => {
    mainWindow.webContents.reloadIgnoringCache();
  });

  ipcMain.handle('web-toggle-devtools', () => {
    mainWindow.webContents.toggleDevTools();
  });

  ipcMain.handle('web-actual-size', () => {
    mainWindow.webContents.setZoomLevel(0);
  });

  ipcMain.handle('web-zoom-in', () => {
    mainWindow.webContents.setZoomLevel(mainWindow.webContents.zoomLevel + 0.5);
  });

  ipcMain.handle('web-zoom-out', () => {
    mainWindow.webContents.setZoomLevel(mainWindow.webContents.zoomLevel - 0.5);
  });

  ipcMain.handle('web-toggle-fullscreen', () => {
    mainWindow.setFullScreen(!mainWindow.fullScreen);
  });

  ipcMain.handle('open-url', (e, url) => {
    shell.openExternal(url);
  });
};
