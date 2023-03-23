import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AirbnbRating } from '@rneui/themed';
import { Product } from 'interfaces/product';
import home from 'assets/home.png';
import { shortenTitle } from 'utils/strings';
import FavButton from 'components/FavButton';

import Routes from 'constants/routes';
import { RoutesParamList } from 'constants/routesParamList';

import styles from './styles';

function ProductCard(props: Product) {
  const {
    title,
    image,
    rating: { rate }
  } = props;

  const navigation = useNavigation<NativeStackNavigationProp<RoutesParamList>>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(Routes.Detail, { ...props })}>
      <Image source={image ? { uri: image } : home} resizeMode="contain" style={styles.image} />
      <AirbnbRating
        isDisabled
        defaultRating={rate}
        size={16}
        reviewSize={10}
        ratingContainerStyle={styles.ratingContainer}
      />
      <Text testID="product-card" style={styles.title}>
        {shortenTitle(title)}
      </Text>
      <FavButton />
    </TouchableOpacity>
  );
}

export default ProductCard;
