import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import uuid from 'uuid';
import Bio from './bio';

describe('ui unit tests - bio', () => {
  const id = uuid;
  beforeEach(() => render(<Bio id={`${id}`}/>));
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('bio', () => {
    const component = screen.queryByTestId(id);
    expect(dummy).toBe(false);
  });
});