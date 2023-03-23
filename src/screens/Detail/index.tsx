import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Product } from 'interfaces/product';
import notFound from 'assets/not-found.png';
import { AirbnbRating } from '@rneui/base';
import { useTranslation } from 'react-i18next';

import { RoutesParamList } from 'constants/routesParamList';

import './i18n';
import styles from './styles';

function Detail() {
  const { params } = useRoute<RouteProp<RoutesParamList>>();
  const { title, price, rating, image, description } = params as Product;
  const { t } = useTranslation('DETAIL');

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.subContainer}>
          <Image source={image ? { uri: image } : notFound} resizeMode="contain" style={styles.image} />
          <View style={styles.review}>
            <AirbnbRating
              isDisabled
              defaultRating={rating.rate}
              size={16}
              reviewSize={10}
              ratingContainerStyle={styles.ratingContainer}
            />
            <Text testID="review">{t('REVIEWS', { count: rating.count })}</Text>
            <View>
              <Text style={styles.price}>${price}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.description}>{description}</Text>
      </ScrollView>
    </View>
  );
}

export default Detail;
