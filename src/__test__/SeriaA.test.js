/**
 * @jest-environment jsdom
 */
import React from 'react';
import 'regenerator-runtime/runtime';
import { render } from '@testing-library/react';
// import App from '../App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import SeriaA from '../components/SeriaA';
import '@testing-library/jest-dom/extend-expect';

describe('check if all component are rendered', () => {
  it('renders page correctly', () => {
    const tree = render(<Provider store={store}><Router><SeriaA /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
