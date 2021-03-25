import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import uuid from 'uuid';
import Home from './home';

describe('ui unit tests - home', () => {
  const id = uuid;
  beforeEach(() => render(<Home id={`${id}`}/>));
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true); 
  });
  it('home', () => {
    expect(dummy).toBe(false);
  });
});