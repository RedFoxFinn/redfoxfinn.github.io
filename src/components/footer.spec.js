import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import uuid from 'uuid';
import Footer from './footer';

describe('ui unit tests - footer', () => {
  const id = uuid;
  beforeEach(() => render(<Footer id={`${id}`}/>));
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('footer', () => {
    expect(dummy).toBe(false);
  });
});