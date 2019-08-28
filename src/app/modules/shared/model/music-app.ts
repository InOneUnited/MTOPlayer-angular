export class MusicApp {
  id: number = undefined;
  name: string = undefined;
  isConnected: boolean = undefined;

  constructor(fields?: { id?: number; name?: string; isConnected?: boolean }) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
