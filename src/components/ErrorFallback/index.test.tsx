import React from 'react';
import { screen, render } from '@testing-library/react-native';

import ErrorFallback from './index';

const error = {
  name: 'error',
  message: 'Mock error'
};

describe('ErrorFallback Tests', () => {
  it('match snapshot', () => {
    render(<ErrorFallback error={error} resetErrorBoundary={() => jest.fn()} />);

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
