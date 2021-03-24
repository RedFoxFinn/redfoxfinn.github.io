import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import uuid from 'uuid';
import Root from './root';

describe('ui unit tests - root', () => {
  const id = uuid;
  beforeEach(() => render(<Root id={`${id}`}/>));
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('root', () => {
    const component = screen.queryByTestId(id);
    expect(dummy).toBe(false);
  });
});