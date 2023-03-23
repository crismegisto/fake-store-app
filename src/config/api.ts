import { create } from 'apisauce';
import Reactotron from 'reactotron-react-native';

// define the api
const api = create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 25000
});

api.addMonitor((Reactotron as any).apisauce);

export default api;
