import packageInfo from '../../package.json';
import text from './text';

describe('tool unit tests - text', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('author', () => {
    const author = text.author();
    expect(author).toMatch(packageInfo.author);
  });
  it('version', () => {
    const version = text.version();
    expect(version).toMatch(packageInfo.version);
  });
});