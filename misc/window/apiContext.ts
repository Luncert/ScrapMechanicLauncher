import { Channels } from '@common/Constants';
import { ipcRenderer } from 'electron';

const apiContext = {
    getGamePath() {
        return ipcRenderer.sendSync(Channels.Api.OpenGamePath)
    }
};

export type IpcApi = typeof apiContext;
export default apiContext;