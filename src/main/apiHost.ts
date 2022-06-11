import { ScrapMechanicHub } from "./lib/src/ScrapMechanicHubLib"
import { BrowserWindow, dialog, ipcMain } from 'electron';
import { Channels } from "@common/Constants";

class Context {

  private hub: ScrapMechanicHub

  loadGame(gamePath: string) {
    console.log('loading game content from', gamePath)
    this.hub = new ScrapMechanicHub(gamePath)
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
        evt.returnValue = ret.filePaths
      })

    ipcMain.handle(Channels.Api.LoadGameContent, (evt, gamePath) => {
      ctx.loadGame(gamePath)
    })
}