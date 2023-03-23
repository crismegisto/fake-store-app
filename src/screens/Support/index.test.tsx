import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react-native';
import { act } from 'react-test-renderer';

import Support from './index';

beforeEach(() => {
  render(<Support />);
});

const name = 'Cristian';

describe('Support screen Tests', () => {
  test('match snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('textinputs work', () => {
    const email = 'cristian@gmail.com';
    const suggestions = 'Thank you!';

    const nameForm = screen.getByPlaceholderText('Name');
    const emailForm = screen.getByPlaceholderText('Email');
    const suggestionsForm = screen.getByTestId('suggestionsForm');

    expect(nameForm).toBeOnTheScreen();
    expect(emailForm).toBeOnTheScreen();
    expect(suggestionsForm).toBeOnTheScreen();

    fireEvent.changeText(nameForm, name);
    fireEvent.changeText(emailForm, email);
    fireEvent.changeText(suggestionsForm, suggestions);

    expect(nameForm.props.value).toBe(name);
    expect(emailForm.props.value).toBe(email);
    expect(suggestionsForm.props.value).toBe(suggestions);
  });

  test('Submit form without requirement', async () => {
    const submit = screen.getByText('Submit');
    expect(submit).toBeOnTheScreen();

    await act(() => {
      fireEvent.press(submit);
    });

    const errorName = screen.getByText('The name is required.');
    expect(errorName).toBeOnTheScreen();
  });
});
