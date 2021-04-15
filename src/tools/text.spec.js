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
  it('devSoftware', () => {
    const devSoft = text.devSoftware();
    expect(devSoft[0].name).toMatch(packageInfo.development_software[0].name.toString());
  });
  it('packages', () => {
    const packages = text.packages();
    const entries = Object.entries(packageInfo.dependencies);
    expect(packages).toBeTruthy();
    expect(packages[0]).toBeTruthy()
    expect(packages[0]).toMatchObject(entries[0]);
  });
  it('devPackages', () => {
    const devPackages = text.devPackages();
    const entries = Object.entries(packageInfo.devDependencies);
    expect(devPackages).toBeTruthy();
    expect(devPackages).toBeTruthy();
    expect(devPackages[0]).toMatchObject(entries[0]);
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
    expect(home[0]).toMatch(content.home.en[0].toString());
  });
  it('home - fi', () => {
    const home = text.home('fi');
    expect(home[1]).toMatch(content.home.fi[1].toString());
  });
  it('home - en', () => {
    const home = text.home('en');
    expect(home[2]).toMatch(content.home.en[2].toString());
  });
  it('home - unknown', () => {
    const home = text.home(`${randomLang}`);
    expect(home[0]).toMatch(content.home.en[0].toString());
  });
  it('about - default', () => {
    const about = text.about();
    expect(about[0]).toMatch(content.about.en[0].toString());
  });
  it('about - fi', () => {
    const about = text.about('fi');
    expect(about[1]).toMatch(content.about.fi[1].toString());
  });
  it('about - en', () => {
    const about = text.about('en');
    expect(about[2]).toMatch(content.about.en[2].toString());
  });
  it('about - unknown', () => {
    const about = text.about(`${randomLang}`);
    expect(about[0]).toMatch(content.about.en[0].toString());
  });
});

describe('tool unit tests - text - themeSelector', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('darkSelector - dark - en', () => {
    const selectorText = text.themeSelectorDark('en', 'dark');
    expect(selectorText).toBeTruthy();
    expect(selectorText).toMatch(`${content.theme.dark.en}`);
    expect(selectorText).toMatch(`${content.theme.theme.en}`);
    expect(selectorText).toMatch(`${content.theme.selected.en}`);
    expect(selectorText).toMatch(`${content.theme.dark.en} ${content.theme.theme.en} ${content.theme.selected.en}`);
  });
  it('darkSelector - dark - fi', () => {
    const selectorText = text.themeSelectorDark('fi', 'dark');
    expect(selectorText).toBeTruthy();
    expect(selectorText).toMatch(`${content.theme.dark.fi}`);
    expect(selectorText).toMatch(`${content.theme.theme.fi}`);
    expect(selectorText).toMatch(`${content.theme.selected.fi}`);
    expect(selectorText).toMatch(`${content.theme.dark.fi} ${content.theme.theme.fi} ${content.theme.selected.fi}`);
  });
  it('darkSelector - light - en', () => {
    const selectorText = text.themeSelectorDark('en', 'light');
    expect(selectorText).toBeTruthy();
    expect(selectorText).toMatch(`${content.theme.dark.en}`);
    expect(selectorText).toMatch(`${content.theme.theme.en}`);
    expect(selectorText).not.toMatch(`${content.theme.selected.en}`);
    expect(selectorText).toMatch(`${content.theme.dark.en} ${content.theme.theme.en}`);
  });
  it('darkSelector - light - fi', () => {
    const selectorText = text.themeSelectorDark('fi', 'light');
    expect(selectorText).toBeTruthy();
    expect(selectorText).toMatch(`${content.theme.dark.fi}`);
    expect(selectorText).toMatch(`${content.theme.theme.fi}`);
    expect(selectorText).not.toMatch(`${content.theme.selected.fi}`);
    expect(selectorText).toMatch(`${content.theme.dark.fi} ${content.theme.theme.fi}`);
  });
  it('darkSelector - dark - sv', () => {
    const selectorText = text.themeSelectorDark('sv', 'dark');
    expect(selectorText).toBeTruthy();
    expect(selectorText).toMatch(`${content.theme.dark.en}`);
    expect(selectorText).toMatch(`${content.theme.theme.en}`);
    expect(selectorText).toMatch(`${content.theme.selected.en}`);
    expect(selectorText).toMatch(`${content.theme.dark.en} ${content.theme.theme.en} ${content.theme.selected.en}`);
  });
  it('darkSelector - light - sv', () => {
    const selectorText = text.themeSelectorDark('sv', 'light');
    expect(selectorText).toBeTruthy();
    expect(selectorText).toMatch(`${content.theme.dark.en}`);
    expect(selectorText).toMatch(`${content.theme.theme.en}`);
    expect(selectorText).not.toMatch(`${content.theme.selected.en}`);
    expect(selectorText).toMatch(`${content.theme.dark.en} ${content.theme.theme.en}`);
  });
  it('darkSelector - green - en', () => {
    const selectorText = text.themeSelectorDark('en', 'green');
    expect(selectorText).toBeTruthy();
    expect(selectorText).toMatch(`${content.theme.dark.en}`);
    expect(selectorText).toMatch(`${content.theme.theme.en}`);
    expect(selectorText).not.toMatch(`${content.theme.selected.en}`);
    expect(selectorText).toMatch(`${content.theme.dark.en} ${content.theme.theme.en}`);
  });
  it('darkSelector - green - fi', () => {
    const selectorText = text.themeSelectorDark('fi', 'green');
    expect(selectorText).toBeTruthy();
    expect(selectorText).toMatch(`${content.theme.dark.fi}`);
    expect(selectorText).toMatch(`${content.theme.theme.fi}`);
    expect(selectorText).not.toMatch(`${content.theme.selected.fi}`);
    expect(selectorText).toMatch(`${content.theme.dark.fi} ${content.theme.theme.fi}`);
  });
  it('darkSelector - red - sv', () => {
    const selectorText = text.themeSelectorDark('sv', 'red');
    expect(selectorText).toBeTruthy();
    expect(selectorText).toMatch(`${content.theme.dark.en}`);
    expect(selectorText).toMatch(`${content.theme.theme.en}`);
    expect(selectorText).not.toMatch(`${content.theme.selected.en}`);
    expect(selectorText).toMatch(`${content.theme.dark.en} ${content.theme.theme.en}`);
  });
  it('lightSelector - dark - en', () => {
    const selectorText = text.themeSelectorLight('en', 'dark');
    expect(selectorText).toBeTruthy();
    expect(selectorText).toMatch(`${content.theme.light.en}`);
    expect(selectorText).toMatch(`${content.theme.theme.en}`);
    expect(selectorText).not.toMatch(`${content.theme.selected.en}`);
    expect(selectorText).toMatch(`${content.theme.light.en} ${content.theme.theme.en}`);
  });
  it('lightSelector - dark - fi', () => {
    const selectorText = text.themeSelectorLight('fi', 'dark');
    expect(selectorText).toBeTruthy();
    expect(selectorText).toMatch(`${content.theme.light.fi}`);
    expect(selectorText).toMatch(`${content.theme.theme.fi}`);
    expect(selectorText).not.toMatch(`${content.theme.selected.fi}`);
    expect(selectorText).toMatch(`${content.theme.light.fi} ${content.theme.theme.fi}`);
  });
  it('lightSelector - light - en', () => {
    const selectorText = text.themeSelectorLight('en', 'light');
    expect(selectorText).toBeTruthy();
    expect(selectorText).toMatch(`${content.theme.light.en}`);
    expect(selectorText).toMatch(`${content.theme.theme.en}`);
    expect(selectorText).toMatch(`${content.theme.selected.en}`);
    expect(selectorText).toMatch(`${content.theme.light.en} ${content.theme.theme.en} ${content.theme.selected.en}`);
  });
  it('lightSelector - light - fi', () => {
    const selectorText = text.themeSelectorLight('fi', 'light');
    expect(selectorText).toBeTruthy();
    expect(selectorText).toMatch(`${content.theme.light.fi}`);
    expect(selectorText).toMatch(`${content.theme.theme.fi}`);
    expect(selectorText).toMatch(`${content.theme.selected.fi}`);
    expect(selectorText).toMatch(`${content.theme.light.fi} ${content.theme.theme.fi} ${content.theme.selected.fi}`);
  });
  it('lightSelector - dark - sv', () => {
    const selectorText = text.themeSelectorLight('sv', 'dark');
    expect(selectorText).toBeTruthy();
    expect(selectorText).toMatch(`${content.theme.light.en}`);
    expect(selectorText).toMatch(`${content.theme.theme.en}`);
    expect(selectorText).not.toMatch(`${content.theme.selected.en}`);
    expect(selectorText).toMatch(`${content.theme.light.en} ${content.theme.theme.en}`);
  });
  it('lightSelector - light - sv', () => {
    const selectorText = text.themeSelectorLight('sv', 'light');
    expect(selectorText).toBeTruthy();
    expect(selectorText).toMatch(`${content.theme.light.en}`);
    expect(selectorText).toMatch(`${content.theme.theme.en}`);
    expect(selectorText).toMatch(`${content.theme.selected.en}`);
    expect(selectorText).toMatch(`${content.theme.light.en} ${content.theme.theme.en} ${content.theme.selected.en}`);
  });
  it('lightSelector - green - en', () => {
    const selectorText = text.themeSelectorLight('en', 'green');
    expect(selectorText).toBeTruthy();
    expect(selectorText).toMatch(`${content.theme.light.en}`);
    expect(selectorText).toMatch(`${content.theme.theme.en}`);
    expect(selectorText).not.toMatch(`${content.theme.selected.en}`);
    expect(selectorText).toMatch(`${content.theme.light.en} ${content.theme.theme.en}`);
  });
  it('lightSelector - green - fi', () => {
    const selectorText = text.themeSelectorLight('fi', 'green');
    expect(selectorText).toBeTruthy();
    expect(selectorText).toMatch(`${content.theme.light.fi}`);
    expect(selectorText).toMatch(`${content.theme.theme.fi}`);
    expect(selectorText).not.toMatch(`${content.theme.selected.fi}`);
    expect(selectorText).toMatch(`${content.theme.light.fi} ${content.theme.theme.fi}`);
  });
  it('lightSelector - red - sv', () => {
    const selectorText = text.themeSelectorLight('sv', 'red');
    expect(selectorText).toBeTruthy();
    expect(selectorText).toMatch(`${content.theme.light.en}`);
    expect(selectorText).toMatch(`${content.theme.theme.en}`);
    expect(selectorText).not.toMatch(`${content.theme.selected.en}`);
    expect(selectorText).toMatch(`${content.theme.light.en} ${content.theme.theme.en}`);
  });
});

describe('tool unit tests - text - about/dependencies', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('dependencies - default', () => {
    const dependenciesText = text.dependencies();
    expect(dependenciesText).toBeTruthy();
    expect(dependenciesText).toMatch(`${content.general.dependencies.en}`);
  });
  it('dependencies - en', () => {
    const dependenciesText = text.dependencies('en');
    expect(dependenciesText).toBeTruthy();
    expect(dependenciesText).toMatch(`${content.general.dependencies.en}`);
  });
  it('dependencies - fi', () => {
    const dependenciesText = text.dependencies('fi');
    expect(dependenciesText).toBeTruthy();
    expect(dependenciesText).toMatch(`${content.general.dependencies.fi}`);
  });
  it('dependencies - sv', () => {
    const dependenciesText = text.dependencies('sv');
    expect(dependenciesText).toBeTruthy();
    expect(dependenciesText).toMatch(`${content.general.dependencies.en}`);
  });
  it('devDependencies - default', () => {
    const devDependenciesText = text.devDependencies();
    expect(devDependenciesText).toBeTruthy();
    expect(devDependenciesText).toMatch(`${content.general.devDependencies.en}`);
  });
  it('devDependencies - en', () => {
    const devDependenciesText = text.devDependencies('en');
    expect(devDependenciesText).toBeTruthy();
    expect(devDependenciesText).toMatch(`${content.general.devDependencies.en}`);
  });
  it('devDependencies - fi', () => {
    const devDependenciesText = text.devDependencies('fi');
    expect(devDependenciesText).toBeTruthy();
    expect(devDependenciesText).toMatch(`${content.general.devDependencies.fi}`);
  });
  it('devDependencies - sv', () => {
    const devDependenciesText = text.devDependencies('sv');
    expect(devDependenciesText).toBeTruthy();
    expect(devDependenciesText).toMatch(`${content.general.devDependencies.en}`);
  });
});