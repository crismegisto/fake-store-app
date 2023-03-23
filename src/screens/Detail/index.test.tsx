import React from 'react';
import { screen, render } from '@testing-library/react-native';

import { mockProducts } from 'constants/mockData';

import Detail from './index';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn()
    }),
    useRoute: () => ({ params: mockProducts[0] })
  };
});

jest.mock('@rneui/base', () => ({
  AirbnbRating: jest.fn()
}));

beforeEach(() => {
  render(<Detail />);
});

describe('Detail screen Tests', () => {
  test('match snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
