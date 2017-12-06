import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { expect } from 'chai';

it('renders without crashing', () => {
  const app = shallow(<App />);
  expect(app).toEquals('Testing');
});
