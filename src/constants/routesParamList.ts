import { Product } from 'interfaces/product';

import Routes from './routes';
export type RoutesParamList = {
  [Routes.HomeNavigator]: undefined;
  [Routes.Home]: undefined;
  [Routes.Detail]: Product;
  [Routes.Support]: undefined;
};
