import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render, screen} from '@testing-library/react';
import Text from './text';
import idGen from '../tools/idGen';
import styles from '../tools/styles';
import { isCompositeComponentWithType } from 'react-dom/test-utils';

const appID = 'rff.test.io';
const testText = ['alfa', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot', 'golf', 'hotel'];

const getRandomTestText = () => {
  return testText[Math.floor(Math.random() * testText.length)];
};

const getRandomDetailTestText = () => {
  return {
    name: getRandomTestText(),
    with: [{name: getRandomTestText()}, {name: getRandomTestText()}, {name: getRandomTestText()}]
  };
};

const getRandomPackageTestText = () => {
  return [
    [getRandomTestText(), getRandomTestText()],
    [getRandomTestText(), getRandomTestText()],
    [getRandomTestText(), getRandomTestText()]
  ];
};

describe('ui unit tests - Text component - ShortText', () => {
  const id = idGen(`${appID}`, 'shortText', 1);
  let dummy = false;
  const textContent = getRandomTestText();
  beforeEach(() => render(<Text.ShortText id={id} content={textContent}/>));
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('ShortText - component renders', () => {
    const component = screen.queryByTestId(id);
    expect(component).toBeTruthy();
    isCompositeComponentWithType(Text.ShortText, component);
  });
  it('ShortText - textContent renders', () => {
    const content = screen.queryByTestId(`${id}.content`);
    expect(content).toBeTruthy();
    expect(content.textContent).toMatch(textContent);
  });
  it('ShortText - textContent style', () => {
    const content = screen.queryByTestId(`${id}.content`);
    expect(content.style.fontSize).toMatch(styles.textM().fontSize);
    expect(content.style.color).toMatch(styles.textM().color);
    expect(content.style.maxWidth).toMatch(styles.textM().maxWidth);
  });
});

describe('ui unit tests - Text component - LongText', () => {
  const id = idGen(`${appID}`, 'longText', 1);
  let dummy = false;
  const textContent = getRandomTestText();
  beforeEach(() => render(<Text.LongText id={id} content={textContent}/>));
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('LongText - component renders', () => {
    const component = screen.queryByTestId(id);
    expect(component).toBeTruthy();
    isCompositeComponentWithType(Text.LongText, component);
  });
  it('LongText - textContent renders', () => {
    const content = screen.queryByTestId(`${id}.content`);
    expect(content).toBeTruthy();
    expect(content.textContent).toMatch(textContent);
  });
  it('LongText - textContent style', () => {
    const content = screen.queryByTestId(`${id}.content`);
    expect(content.style.fontSize).toMatch(styles.textM().fontSize);
    expect(content.style.color).toMatch(styles.textM().color);
    expect(content.style.maxWidth).toMatch(styles.textM().maxWidth);
  });
});

describe('ui unit tests - Text component - HeaderText', () => {
  const id = idGen(`${appID}`, 'headerText');
  let dummy = false;
  const textContent = getRandomTestText();
  beforeEach(() => render(<Text.HeaderText id={id} content={textContent}/>));
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('HeaderText - component renders', () => {
    const component = screen.queryByTestId(id);
    expect(component).toBeTruthy();
    isCompositeComponentWithType(Text.HeaderText, component);
  });
  it('HeaderText - textContent renders', () => {
    const content = screen.queryByTestId(`${id}.content`);
    expect(content).toBeTruthy();
    expect(content.textContent).toMatch(textContent);
  });
  it('HeaderText - textContent style', () => {
    const content = screen.queryByTestId(`${id}.content`);
    expect(content.style.fontSize).toMatch(styles.textL().fontSize);
    expect(content.style.color).toMatch(styles.textL().color);
    expect(content.style.maxWidth).toMatch(styles.textL().maxWidth);
  });
});

describe('ui unit tests - Text component - DetailText', () => {
  const id = idGen(`${appID}`, 'detailText', 1);
  let dummy = false;
  const textContent = getRandomDetailTestText();
  beforeEach(() => render(<Text.DetailText id={id} content={textContent}/>));
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('DetailText - component renders', () => {
    const component = screen.queryByTestId(id);
    expect(component).toBeTruthy();
    isCompositeComponentWithType(Text.DetailText, component);
  });
  it('DetailText - summary renders', () => {
    expect(screen.queryByTestId(`${id}.details`)).toBeTruthy();
    const summary = screen.queryByTestId(`${id}.details.summary`);
    expect(summary).toBeTruthy();
    expect(summary.textContent).toMatch(textContent.name);
  });
  it('DetailText - textContent renders', () => {
    fireEvent.click(screen.queryByTestId(`${id}.details.summary`));
    const detail0 = screen.queryByTestId(`${id}.details.content.0`);
    const detail1 = screen.queryByTestId(`${id}.details.content.1`);
    const detail2 = screen.queryByTestId(`${id}.details.content.2`);
    expect(detail0).toBeTruthy();
    expect(detail1).toBeTruthy();
    expect(detail2).toBeTruthy();
    expect(detail0.textContent).toMatch(textContent.with[0].name);
    expect(detail1.textContent).toMatch(textContent.with[1].name);
    expect(detail2.textContent).toMatch(textContent.with[2].name);
  });
  it('DetailText - summary style', () => {
    const summary = screen.queryByTestId(`${id}.details.summary`);
    expect(summary.style.fontSize).toMatch(styles.textM().fontSize);
    expect(summary.style.color).toMatch(styles.textM().color);
    expect(summary.style.maxWidth).toMatch(styles.textM().maxWidth);
  });
  it('DetailText - textContent style', () => {
    fireEvent.click(screen.queryByTestId(`${id}.details.summary`));
    const detail0 = screen.queryByTestId(`${id}.details.content.0`);
    expect(detail0.style.fontSize).toMatch(styles.textM().fontSize);
    expect(detail0.style.color).toMatch(styles.textM().color);
    expect(detail0.style.maxWidth).toMatch(styles.textM().maxWidth);
  });
});

describe('ui unit tests - Text component - PackageText', () => {
  const id = idGen(`${appID}`, 'packageText', 1);
  let dummy = false;
  const packages = getRandomPackageTestText();
  beforeEach(() => render(<Text.PackageText id={id} packageTypes='test' packages={packages}/>));
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('PackageText - component renders', () => {
    const component = screen.queryByTestId(id);
    expect(component).toBeTruthy();
    isCompositeComponentWithType(Text.PackageText, component);
  });
  it('PackageText - summary renders', () => {
    expect(screen.queryByTestId(`${id}.details`)).toBeTruthy();
    const summary = screen.queryByTestId(`${id}.details.summary`);
    expect(summary).toBeTruthy();
    expect(summary.textContent).toMatch('test');
  });
  it('PackageText - textContent renders', () => {
    fireEvent.click(screen.queryByTestId(`${id}.details.summary`));
    const detail0 = screen.queryByTestId(`${id}.details.content.0`);
    const detail1 = screen.queryByTestId(`${id}.details.content.1`);
    const detail2 = screen.queryByTestId(`${id}.details.content.2`);
    expect(detail0).toBeTruthy();
    expect(detail1).toBeTruthy();
    expect(detail2).toBeTruthy();
    expect(detail0.textContent).toMatch(packages[0][0]);
    expect(detail0.textContent).toMatch(packages[0][1]);
    expect(detail0.textContent).toMatch(`${packages[0][0]}: ${packages[0][1]}`);
    expect(detail1.textContent).toMatch(packages[1][0]);
    expect(detail1.textContent).toMatch(packages[1][1]);
    expect(detail1.textContent).toMatch(`${packages[1][0]}: ${packages[1][1]}`);
    expect(detail2.textContent).toMatch(packages[2][0]);
    expect(detail2.textContent).toMatch(packages[2][1]);
    expect(detail2.textContent).toMatch(`${packages[2][0]}: ${packages[2][1]}`);
  });
  it('PackageText - summary style', () => {
    const summary = screen.queryByTestId(`${id}.details.summary`);
    expect(summary.style.fontSize).toMatch(styles.textM().fontSize);
    expect(summary.style.color).toMatch(styles.textM().color);
    expect(summary.style.maxWidth).toMatch(styles.textM().maxWidth);
  });
  it('PackageText - textContent style', () => {
    fireEvent.click(screen.queryByTestId(`${id}.details.summary`));
    const detail0 = screen.queryByTestId(`${id}.details.content.0`);
    expect(detail0.style.fontSize).toMatch(styles.textM().fontSize);
    expect(detail0.style.color).toMatch(styles.textM().color);
    expect(detail0.style.maxWidth).toMatch(styles.textM().maxWidth);
  });
});