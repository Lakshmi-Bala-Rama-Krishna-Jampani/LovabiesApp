/**
 * @format
 */

import React from 'react';
import { act } from 'react-test-renderer';
import ReactTestRenderer from 'react-test-renderer';

import App from '../App';

jest.mock('../src/navigation/AppNavigator', () => ({
  AppNavigator: () => null,
}));

describe('App', () => {
  it('renders without crashing', () => {
    act(() => {
      ReactTestRenderer.create(<App />);
    });
  });
});
