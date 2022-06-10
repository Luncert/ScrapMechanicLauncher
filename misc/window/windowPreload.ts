import { contextBridge } from 'electron';
import apiContext from './apiContext';
import titlebarContext from './titlebarContext';

contextBridge.exposeInMainWorld('electron_window', {
  titlebar: titlebarContext,
  api: apiContext
});
