import { ActionLogger, ScrapMechanicHub } from "./lib/src/ScrapMechanicHubLib"
import { BrowserWindow, dialog, ipcMain } from 'electron';
import { Channels } from "@common/Constants";
import { v4 as uuidv4 } from 'uuid'
import { LoadGameLog } from "@common/Types";

class Context {

  private hub = new ScrapMechanicHub()

  loadGame(gamePath: string, actionLogger: ActionLogger) {
    console.log('loading game from', gamePath)
    this.hub.loadGame(gamePath, actionLogger)
  }

  loadContent() {
    
  }
}

const ctx = new Context()

export function registerApi(mainWindow: BrowserWindow) {
    ipcMain.on(Channels.Api.OpenGamePath, async(evt) => {
        let ret = await dialog.showOpenDialog({
          title: 'Open Game Path',
          properties: ['openDirectory']
        })
        evt.returnValue = ret.filePaths[0]
      })

    ipcMain.on(Channels.Api.LoadGameContent, (evt, gamePath) => {
      let tempChannel = uuidv4()
      const actionLogger = {
        write(data) {
          mainWindow.webContents.send(tempChannel, {log: data} as LoadGameLog)
        },
        close(actionSuccess) {
          mainWindow.webContents.send(tempChannel, {complete: true, success: actionSuccess} as LoadGameLog)
        },
      } as ActionLogger
      ctx.loadGame(gamePath, actionLogger)
      evt.returnValue = tempChannel
    })
}