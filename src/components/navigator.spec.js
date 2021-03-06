import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {HashRouter as Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import uuid from 'uuid';
import Navigator from './navigator';

describe('ui unit tests - navigator', () => {
  const id = uuid;
  beforeEach(() => render(<Router><Navigator id={`${id}`}/></Router>));
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('navigator', () => {
    const component = screen.queryByTestId(id);
    expect(dummy).toBe(false);
  });
});