import { Channels } from '@common/Constants';
import { LoadGameLog } from '@common/Types';
import { ipcRenderer, IpcRendererEvent } from 'electron';

const apiContext = {
    getGamePath() {
        return ipcRenderer.sendSync(Channels.Api.OpenGamePath)
    },
    loadGameContent(gamePath: string, onLog: (log: string) => void, onComplete: (success: boolean) => void) {
        let tempChannel = ipcRenderer.sendSync(Channels.Api.LoadGameContent, gamePath)
        const tempChannelListener = (evt: IpcRendererEvent, data: LoadGameLog) => {
            if (data.complete) {
                onComplete(data.success)
                ipcRenderer.off(tempChannel, tempChannelListener)
            } else {
                onLog(data.log)
            }
        }
        ipcRenderer.on(tempChannel, tempChannelListener)
    }
};

export type IpcApi = typeof apiContext;
export default apiContext;