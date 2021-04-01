import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import uuid from 'uuid';
import Text from './text';
import text from '../tools/text';
import { isCompositeComponentWithType } from 'react-dom/test-utils';

describe('ui unit tests - Text component - ShortText', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('test', () => {
    expect(dummy).toBe(false);
  });
});

describe('ui unit tests - Text component - LongText', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('test', () => {
    expect(dummy).toBe(false);
  });
});