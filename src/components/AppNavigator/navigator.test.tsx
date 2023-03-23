import * as React from 'react';
import { screen, fireEvent, render } from '@testing-library/react-native';

import { mockProducts } from 'constants/mockData';

import AppNavigator from './index';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const component = <AppNavigator />;

jest.mock('config/api', () => {
  const actualApi = jest.requireActual('config/api');
  return {
    ...actualApi,
    get: jest.fn().mockResolvedValue({ ok: true, data: mockProducts })
  };
});

jest.mock('@rneui/themed', () => ({
  AirbnbRating: jest.fn(),
  SearchBar: jest.fn()
}));

jest.mock('@rneui/base', () => ({
  AirbnbRating: jest.fn()
}));

beforeEach(() => {
  render(component);
});

describe('Testing react navigation', () => {
  test('navigation to Detail from task', async () => {
    const button = await screen.findAllByTestId('product-card');
    fireEvent(button[0], 'press');

    const text = await screen.findByTestId('review');
    expect(text).toBeOnTheScreen();
  });
});
