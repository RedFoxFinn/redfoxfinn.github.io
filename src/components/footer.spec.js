import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import uuid from 'uuid';
import Footer from './footer';
import text from '../tools/text';
import { isCompositeComponentWithType } from 'react-dom/test-utils';

describe('ui unit tests - footer', () => {
  const id = uuid;
  beforeEach(() => render(<Footer id={`${id}`}/>));
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('footer - appName', () => {
    const component = screen.queryByTestId(`${id}`);
    expect(component).toBeTruthy();
    isCompositeComponentWithType(Footer, component);
    expect(component.textContent).toMatch(text.appName());
  });
  it('footer - version', () => {
    const component = screen.queryByTestId(`${id}`);
    expect(component).toBeTruthy();
    isCompositeComponentWithType(Footer, component);
    expect(component.textContent).toMatch(text.version());
  });
});