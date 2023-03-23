import { Dimensions, StyleSheet } from 'react-native';

const WIDTH = Dimensions.get('window').width / 2;
const DEFAULT_MARGIN = 6;
const IMAGE_SIZE = 86;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 14,
    margin: DEFAULT_MARGIN,
    width: WIDTH - DEFAULT_MARGIN * 3,
    height: 200,
    borderRadius: 12
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    alignSelf: 'center'
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold'
  },
  ratingContainer: {
    height: 10
  }
});

export default styles;
