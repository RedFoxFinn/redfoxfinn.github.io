import uuid from 'uuid';
import idGen from './idGen';

describe('tool unit tests - idGen', () => {
  let dummy = false;
  const appId = uuid;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('default', () => {
    const gen = idGen(`${appId}`,'default');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.default`);
  });
  it('app', () => {
    const gen = idGen(`${appId}`, 'app');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.app`);
  });
  it('header', () => {
    const gen = idGen(`${appId}`, 'header');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.app.header`);
  });
  it('footer', () => {
    const gen = idGen(`${appId}`, 'footer');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.app.footer`);
  });
  it('navigator', () => {
    const gen = idGen(`${appId}`, 'navigator');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.app.navigator`);
  });
  it('home', () => {
    const gen = idGen(`${appId}`, 'home');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.app.home`);
  });
  it('cv', () => {
    const gen = idGen(`${appId}`, 'cv');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.app.cv`);
  });
  it('about', () => {
    const gen = idGen(`${appId}`, 'about');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.app.about`);
  });
  it('links', () => {
    const gen = idGen(`${appId}`, 'links');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.app.links`);
  });
  it('navHome', () => {
    const gen = idGen(`${appId}`, 'navHome');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.navHome`);
  });
  it('navLinks', () => {
    const gen = idGen(`${appId}`, 'navLinks');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.navLinks`);
  });
  it('navCV', () => {
    const gen = idGen(`${appId}`, 'navCV');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.navCV`);
  });
  it('navAbout', () => {
    const gen = idGen(`${appId}`, 'navAbout');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.navAbout`);
  });
  it('text', () => {
    const gen = idGen(`${appId}`, 'text', 1);
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.text.1`);
  });
  it('shortText', () => {
    const gen = idGen(`${appId}`, 'shortText', 2);
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.shortText.2`);
  });
  it('longText', () => {
    const gen = idGen(`${appId}`, 'longText', 3);
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.longText.3`);
  });
  it('headerText', () => {
    const gen = idGen(`${appId}`, 'headerText');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.headerText`);
  });
  it('detailText', () => {
    const gen = idGen(`${appId}`, 'detailText', 4);
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.detailText.4`);
  });
});