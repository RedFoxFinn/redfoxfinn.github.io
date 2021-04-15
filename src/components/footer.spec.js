import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render, screen} from '@testing-library/react';
import Footer from './footer';
import text from '../tools/text';
import styles from '../tools/styles';
import { isCompositeComponentWithType } from 'react-dom/test-utils';

describe('ui unit tests - footer', () => {
  beforeEach(() => render(<Footer id={`app.footer`}/>));
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('footer - component renders', () => {
    const component = screen.queryByTestId(`app.footer`);
    expect(component).toBeTruthy();
    isCompositeComponentWithType(Footer, component);
  });
  it('footer - appName renders', () => {
    const component = screen.queryByTestId(`app.footer`);
    expect(component.textContent).toMatch(text.appName());
  });
  it('footer - version renders', () => {
    const component = screen.queryByTestId(`app.footer`);
    expect(component.textContent).toMatch(text.version());
    expect(component).toHaveTextContent(`v${text.version()}`);
  });
  it('footer - component styles', () => {
    const component = screen.queryByTestId(`app.footer`);
    expect(component.style.alignContent).toMatch(styles.row().alignContent);
    expect(component.style.alignItems).toMatch(styles.row().alignItems);
    expect(component.style.display).toMatch(styles.row().display);
    expect(component.style.flexDirection).toMatch(styles.row().flexDirection);
  });
  it('footer - appName styles', () => {
    const first = screen.queryByTestId(`app.footer.first`);
    expect(first).toBeTruthy();
    expect(first.style.fontSize).toMatch(styles.footer_first().fontSize);
    expect(first.style.color).toMatch(styles.footer_first().color);
  });
  it('footer - version styles', () => {
    const version = screen.queryByTestId(`app.footer.second`);
    expect(version).toBeTruthy();
    expect(version.style.fontSize).toMatch(styles.underlined().fontSize);
    expect(version.style.color).toMatch(styles.underlined().color);
  });
});