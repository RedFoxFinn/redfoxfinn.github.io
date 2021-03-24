import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import uuid from 'uuid';
import Header from './header';
import text from '../tools/text';
import { isCompositeComponentWithType } from 'react-dom/test-utils';

describe('ui unit tests - header', () => {
  const id = uuid;
  let dummy = false;
  beforeEach(() => render(<Header id={`${id}`}/>));
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('header - author name renders', () => {
    const component = screen.queryByTestId(id);
    expect(component).toBeTruthy();
    isCompositeComponentWithType(Header, component);
    expect(component.textContent).toMatch(text.author());
  });
});