import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  let appWrapper;
  let appInstance;
  const app = () => shallow(<App />);

  beforeEach(() => {
    appWrapper = app();
    appInstance = appWrapper.instance();
  });

  afterEach(() => {
    appWrapper = undefined;
    appInstance = undefined;
  });

  it('renders without crashing', () => {
    expect(app().exists()).toBe(true);
  });
});

