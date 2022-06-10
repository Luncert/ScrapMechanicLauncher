import { Channels } from '@common/Constants';
import { ipcRenderer } from 'electron';

const ipcApiContext = {
    getGamePath() {
        return ipcRenderer.sendSync(Channels.Api.OpenGamePath)
    }
}

type IpcApi = typeof ipcApiContext;

const context: IpcApi = ipcApiContext;

export default context;