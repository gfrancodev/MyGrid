export interface ILogsIotCoreProvider {
  AuthIotCore (): Promise<Object>
  PathAuth(env: string, name: string): Promise<any>
}
