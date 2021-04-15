import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import Selector from './selector';
import idGen from '../tools/idGen';
import styles from '../tools/styles';
import language from '../tools/language';
import text from '../tools/text';
import theme from '../tools/theme';
import { isCompositeComponentWithType } from 'react-dom/test-utils';

describe('ui unit tests - themeSelector - dark', () => {
  const id = idGen('rff.test.io', 'themeSelector', 'dark');
  let dummy = false;
  beforeEach(() => render(<Selector.ThemeSelector id={id}/>));
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('themeSelector - dark - component renders', () => {
    expect(false).toBe(true);
  });
});

describe('ui unit tests - themeSelector - light', () => {
  const id = idGen('rff.test.io', 'themeSelector', 'light');
  let dummy = false;
  beforeEach(() => render(<Selector.ThemeSelector id={id}/>));
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('themeSelector - light - component renders', () => {
    expect(false).toBe(true);
  });
});

describe('ui unit tests - languageSelector - en', () => {
  const id = idGen('rff.test.io', 'languageSelector', 'en');
  let dummy = false;
  beforeEach(() => render(<Selector.LanguageSelector id={id}/>));
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('languageSelector - en - component renders', () => {
    expect(false).toBe(true);
  });
});

describe('ui unit tests - languageSelector - fi', () => {
  const id = idGen('rff.test.io', 'languageSelector', 'fli');
  let dummy = false;
  beforeEach(() => render(<Selector.LanguageSelector id={id}/>));
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('languageSelector - fi - component renders', () => {
    expect(false).toBe(true);
  });
});