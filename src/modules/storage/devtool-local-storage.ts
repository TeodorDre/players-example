import {
  AbstractLocalStorageInstance,
} from './local-storage';

class DevtoolPlayerLocalStorageInstance extends AbstractLocalStorageInstance {
  constructor() {
    super('player-devtool');
  }
}

export default new DevtoolPlayerLocalStorageInstance();
