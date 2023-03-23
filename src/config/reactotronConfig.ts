import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';
import ReactotronFlipper from 'reactotron-react-native/dist/flipper';
import tronsauce from 'reactotron-apisauce';

import { Tron } from '../interfaces/reactotron';

declare global {
  interface Console {
    tron: Tron;
  }
}

Reactotron.configure({
  name: 'Fake Store App',
  createSocket: path => new ReactotronFlipper(path)
})
  .setAsyncStorageHandler?.(AsyncStorage)
  .useReactNative()
  .use(tronsauce())
  .connect();

export default Reactotron;
