import { Channels } from '@common/Constants';
import { ipcRenderer } from 'electron';

const apiContext = {
    getGamePath() {
        return ipcRenderer.sendSync(Channels.Api.OpenGamePath)
    },
    loadGameContent(gamePath: string) {
        ipcRenderer.invoke(Channels.Api.LoadGameContent, gamePath)
    }
};

export type IpcApi = typeof apiContext;
export default apiContext;