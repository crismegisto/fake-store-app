import { Platform, StyleSheet } from 'react-native';
import { tertiary } from 'src/constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tertiary
  },
  subContainer: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: Platform.OS === 'ios' ? 60 : 90,
    paddingHorizontal: 4
  }
});

export default styles;
