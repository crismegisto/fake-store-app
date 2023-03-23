import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { lightGray, primary } from 'constants/colors';

import ICONS from './constants';

interface Props {
  name: string;
  focused: boolean;
}
function TabIcon({ name, focused }: Props) {
  return <Icon name={ICONS[name]} size={34} color={focused ? primary : lightGray} />;
}

export default TabIcon;
