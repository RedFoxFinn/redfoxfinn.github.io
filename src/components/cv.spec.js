import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import uuid from 'uuid';
import CV from './cv';

describe('ui unit tests - cv', () => {
  const id = uuid;
  beforeEach(() => render(<CV id={`${id}`}/>));
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('cv', () => {
    const component = screen.queryByTestId(id);
    expect(dummy).toBe(false);
  });
});