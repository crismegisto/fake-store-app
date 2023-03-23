import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from 'screens/Home';
import Support from 'screens/Support';
import Detail from 'screens/Detail';
import { tabProps, defaultTabOptions } from 'config/navigation';

import Routes from 'constants/routes';
import { RoutesParamList } from 'constants/routesParamList';

const Tab = createBottomTabNavigator<RoutesParamList>();
const Stack = createNativeStackNavigator<RoutesParamList>();

const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.Home} component={Home} options={{ headerShown: false }} />
    <Stack.Screen name={Routes.Detail} component={Detail} />
  </Stack.Navigator>
);

function Navigator() {
  return (
    <Tab.Navigator {...tabProps}>
      <Tab.Screen name={Routes.HomeNavigator} component={HomeNavigator} options={defaultTabOptions} />
      <Tab.Screen name={Routes.Support} component={Support} options={defaultTabOptions} />
    </Tab.Navigator>
  );
}

export default Navigator;
