import React from 'react';
import { screen, render } from '@testing-library/react-native';

import { mockProducts } from 'constants/mockData';

import Home from './index';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn()
    })
  };
});

jest.mock('@rneui/themed', () => ({
  AirbnbRating: jest.fn(),
  SearchBar: jest.fn()
}));

jest.mock('config/api', () => {
  const actualApi = jest.requireActual('config/api');
  return {
    ...actualApi,
    get: jest.fn().mockResolvedValue({ ok: true, data: mockProducts })
  };
});

beforeEach(() => {
  render(<Home />);
});

describe('Home screen Tests', () => {
  test('match snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('service success', async () => {
    expect(await screen.findAllByTestId('product-card')).toHaveLength(2);
  });
});
