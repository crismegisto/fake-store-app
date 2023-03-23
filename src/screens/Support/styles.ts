import { StyleSheet } from 'react-native';
import { primary, secondary, tertiary } from 'src/constants/colors';

const DEFAULT_SIZE = 40;
const DEFAULT_RADIOUS = 4;

const basicInput = {
  height: DEFAULT_SIZE,
  marginVertical: 12,
  borderWidth: 2,
  borderColor: primary,
  borderRadius: DEFAULT_RADIOUS,
  backgroundColor: 'white',
  padding: 10
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: tertiary
  },
  button: {
    marginTop: 40,
    height: DEFAULT_SIZE,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: secondary,
    borderRadius: DEFAULT_RADIOUS,
    alignSelf: 'center'
  },
  input: basicInput,
  largeInput: {
    ...basicInput,
    height: 200
  },
  suggestionsTitle: {
    marginTop: 14,
    marginHorizontal: 4
  },
  textError: {
    color: 'red'
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold'
  },
  thanks: {
    color: primary,
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center',
    marginTop: -50
  }
});

export default styles;
