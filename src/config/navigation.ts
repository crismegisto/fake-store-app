import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs/src/types';
import TabIcon from 'components/TabIcon';
import { RouteProp } from '@react-navigation/native';

import { RoutesParamList } from 'constants/routesParamList';
import { lightGray, primary } from 'constants/colors';

const screenTabOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarStyle: {
    height: 90,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 6,
    paddingTop: 9,
    position: 'absolute',
    borderTopWidth: 0
  }
};

export const tabProps = {
  screenOptions: screenTabOptions
};

export const defaultTabOptions = ({ route }: { route: RouteProp<RoutesParamList> }) => ({
  tabBarIcon: ({ focused }: { focused: boolean }) => TabIcon({ name: route.name, focused }),
  tabBarLabelStyle: { margin: 4 },
  tabBarActiveTintColor: primary,
  tabBarInactiveTintColor: lightGray
});
