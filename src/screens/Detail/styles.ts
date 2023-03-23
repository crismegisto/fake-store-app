import { StyleSheet } from 'react-native';
import { tertiary } from 'src/constants/colors';

const IMAGE_SIZE = 150;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tertiary
  },
  title: {
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    alignSelf: 'center'
  },
  review: {
    alignItems: 'center'
  },
  ratingContainer: {
    height: 10,
    marginBottom: 22
  },
  price: {
    margin: 14,
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 16,
    margin: 20
  }
});

export default styles;
