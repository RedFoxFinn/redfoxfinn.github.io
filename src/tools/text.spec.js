import packageInfo from '../../package.json';
import text from './text';
import content from '../data/text.json';
import uuid from 'uuid';

const randomLang = uuid;

describe('tool unit tests - text - info', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('author', () => {
    const author = text.author();
    expect(author).toBeTruthy();
    expect(author).toMatch(packageInfo.author);
  });
  it('version', () => {
    const version = text.version();
    expect(version).toBeTruthy();
    expect(version).toMatch(packageInfo.version);
  });
  it('appId', () => {
    const appId = text.appId();
    expect(appId).toBeTruthy();
    expect(appId).toMatch(packageInfo.appId);
  });
  it('appName', () => {
    const appName = text.appName();
    expect(appName).toBeTruthy();
    expect(appName).toMatch(packageInfo.appName);
  });
});

describe('tool unit tests - text - navigation', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('home - default', () => {
    const nav = text.navHome();
    expect(nav).toMatch(content.navigation[0].en.toString());
  });
  it('home - fi', () => {
    const nav = text.navHome('fi');
    expect(nav).toMatch(content.navigation[0].fi.toString());
  });
  it('home - en', () => {
    const nav = text.navHome('en');
    expect(nav).toMatch(content.navigation[0].en.toString());
  });
  it('home - unknown', () => {
    const nav = text.navHome(`${randomLang}`);
    expect(nav).toMatch(content.navigation[0].en.toString());
  });
  it('about - default', () => {
    const nav = text.navAbout();
    expect(nav).toMatch(content.navigation[3].en.toString());
  });
  it('about - fi', () => {
    const nav = text.navAbout('fi');
    expect(nav).toMatch(content.navigation[3].fi.toString());
  });
  it('about - en', () => {
    const nav = text.navAbout('en');
    expect(nav).toMatch(content.navigation[3].en.toString());
  });
  it('about - unknown', () => {
    const nav = text.navAbout(`${randomLang}`);
    expect(nav).toMatch(content.navigation[3].en.toString());
  });
  it('cv - default', () => {
    const nav = text.navCV();
    expect(nav).toMatch(content.navigation[1].en.toString());
  });
  it('cv - fi', () => {
    const nav = text.navCV('fi');
    expect(nav).toMatch(content.navigation[1].fi.toString());
  });
  it('cv - en', () => {
    const nav = text.navCV('en');
    expect(nav).toMatch(content.navigation[1].en.toString());
  });
  it('cv - unknown', () => {
    const nav = text.navCV(`${randomLang}`);
    expect(nav).toMatch(content.navigation[1].en.toString());
  });
  it('links - default', () => {
    const nav = text.navLinks();
    expect(nav).toMatch(content.navigation[2].en.toString());
  });
  it('links - fi', () => {
    const nav = text.navLinks('fi');
    expect(nav).toMatch(content.navigation[2].fi.toString());
  });
  it('links - en', () => {
    const nav = text.navLinks('en');
    expect(nav).toMatch(content.navigation[2].en.toString());
  });
  it('links - unknown', () => {
    const nav = text.navLinks(`${randomLang}`);
    expect(nav).toMatch(content.navigation[2].en.toString());
  });
});

describe('tool unit tests - text - content', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('home - default', () => {
    const home = text.home();
    expect(home).toMatch(content.home.en.toString());
  });
  it('home - fi', () => {
    const home = text.home('fi');
    expect(home).toMatch(content.home.fi.toString());
  });
  it('home - en', () => {
    const home = text.home('en');
    expect(home).toMatch(content.home.en.toString());
  });
  it('home - unknown', () => {
    const home = text.home(`${randomLang}`);
    expect(home).toMatch(content.home.en.toString());
  });
});