
import { IpcApi } from "./apiContext";

const context: IpcApi = (window as any).electron_window.api;

export default context;