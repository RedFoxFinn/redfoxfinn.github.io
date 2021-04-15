import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, screen, cleanup} from '@testing-library/react';
import Header from './header';
import text from '../tools/text';
import styles from '../tools/styles';
import { isCompositeComponentWithType } from 'react-dom/test-utils';

describe('ui unit tests - header', () => {
  let dummy = false;
  beforeEach(() => render(<Header id={`app.header`}/>));
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('header - component renders', () => {
    const component = screen.queryByTestId(`app.header`);
    expect(component).toBeTruthy();
    isCompositeComponentWithType(Header, component);
  });
  it('header - author name renders', () => {
    const content = screen.queryByTestId(`app.header.content`);
    expect(content).toBeTruthy();
    expect(content.textContent).toMatch(`${text.author()}`);
    expect(content.textContent).toBe(`[${text.author()}]`);
  });
  it('header - component style', () => {
    const component = screen.queryByTestId(`app.header`);
    expect(component.style.alignContent).toMatch(styles.row().alignContent);
    expect(component.style.alignItems).toMatch(styles.row().alignItems);
    expect(component.style.display).toMatch(styles.row().display);
    expect(component.style.flexDirection).toMatch(styles.row().flexDirection);
  });
  it('header - textContent style', () => {
    const content = screen.queryByTestId(`app.header.content`);
    expect(content.style.color).toMatch(styles.header_first().color);
    expect(content.style.fontSize).toMatch(styles.header_first().fontSize);
  });
});