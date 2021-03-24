import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import uuid from 'uuid';
import About from './about';

describe('ui unit tests - about', () => {
  const id = uuid;
  beforeEach(() => render(<About id={`${id}`}/>));
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('about', () => {
    const component = screen.queryByTestId(id);
    expect(dummy).toBe(false);
  });
});