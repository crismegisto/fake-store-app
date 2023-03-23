import React from 'react';
import { screen, render } from '@testing-library/react-native';

import TabIcon from './index';

beforeEach(() => {
  render(<TabIcon name="home" focused={true} />);
});

describe('TabIcon snapshot', () => {
  test('match snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
