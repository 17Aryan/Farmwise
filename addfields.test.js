import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for extended DOM matchers
import { Provider } from 'react-redux';
import store from '../redux/store';
import AddFields from './addfields';

test('renders Add Fields component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <AddFields />
    </Provider>
  );

  expect(getByText('Add Fields')).toBeInTheDocument();
});