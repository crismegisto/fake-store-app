import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { primary } from 'constants/colors';

import styles from './styles';

function FavButton() {
  return (
    <TouchableOpacity style={styles.container} onPress={() => ({})}>
      <Icon name={'favorite'} size={24} color={primary} />
    </TouchableOpacity>
  );
}

export default FavButton;
