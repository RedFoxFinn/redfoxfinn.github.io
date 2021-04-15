import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import Home from './home';
import Root from './root';
import idGen from '../tools/idGen';
import styles from '../tools/styles';
import language from '../tools/language';
import text from '../tools/text';
import { isCompositeComponentWithType } from 'react-dom/test-utils';

describe('ui unit tests - home', () => {
  const id = idGen('rff.test.io', 'home');
  const lang = language.checkLang();
  let dummy = false;
  const textContent = text.home(lang);
  beforeEach(() => render(<Home id={id}/>));
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true); 
  });
  it('home - component renders', () => {
    const component = screen.queryByTestId(id);
    expect(component).toBeTruthy();
    isCompositeComponentWithType(Home, component);
  });
  it('home - textContent renders', () => {
    const content0 = screen.queryByTestId(`${id}.shortText.0`);
    const content1 = screen.queryByTestId(`${id}.longText.1`);
    const content2 = screen.queryByTestId(`${id}.longText.2`);
    expect(content0).toBeTruthy();
    expect(content0.textContent).toMatch(textContent[0]);
    expect(content1).toBeTruthy();
    expect(content1.textContent).toMatch(textContent[1]);
    expect(content2).toBeTruthy();
    expect(content2.textContent).toMatch(textContent[2]);
  });
  it('home - component style', () => {
    const component = screen.queryByTestId(id);
    expect(component.style.display).toMatch(styles.rootElement().display);
    expect(component.style.flexDirection).toMatch(styles.rootElement().flexDirection);
    expect(component.style.alignItems).toMatch(styles.rootElement().alignItems);
    expect(component.style.alignContent).toMatch(styles.rootElement().alignContent);
  });
  it('home - textContent style', () => {
    const content0 = screen.queryByTestId(`${id}.shortText.0.content`);
    const content1 = screen.queryByTestId(`${id}.longText.1.content`);
    const content2 = screen.queryByTestId(`${id}.longText.2.content`);
    expect(content0.style.fontSize).toMatch(styles.textL().fontSize);
    expect(content0.style.color).toMatch(styles.textL().color);
    expect(content0.style.maxWidth).toMatch(styles.textL().maxWidth);
    expect(content1.style.fontSize).toMatch(styles.textL().fontSize);
    expect(content1.style.color).toMatch(styles.textL().color);
    expect(content1.style.maxWidth).toMatch(styles.textL().maxWidth);
    expect(content2.style.fontSize).toMatch(styles.textL().fontSize);
    expect(content2.style.color).toMatch(styles.textL().color);
    expect(content2.style.maxWidth).toMatch(styles.textL().maxWidth);
  });
});