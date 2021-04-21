import theme from './theme';

describe('tool unit tests - theme', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('themes', () => {
    const themes = theme.themes();
    expect(themes).toBeTruthy();
    expect(themes.length).toBe(2);
    expect(themes[0]).toMatch('dark');
    expect(themes[1]).toMatch('light');
  });
  it('checkTheme', () => {
    const check = theme.checkTheme();
    expect(check).toBeTruthy();
    expect(check.theme).toBeTruthy();
    expect(check.theme).toMatch('light');
    expect(check.status).toBeTruthy()
    expect(check.status).toMatch('done');
    expect(check.action).toBeTruthy();
    expect(check.action).toMatch('autoSet');
  });
  it('setTheme - dark', () => {
    theme.setTheme('dark');
    const set = theme.checkTheme();
    expect(set).toBeTruthy();
    expect(set.theme).toMatch('dark');
    expect(set.status).toBeTruthy()
    expect(set.status).toMatch('done');
    expect(set.action).toBeTruthy();
    expect(set.action).toMatch('check');
  });
  it('setTheme - light', () => {
    theme.setTheme('light');
    const set = theme.checkTheme();
    expect(set).toBeTruthy();
    expect(set.theme).toMatch('light');
    expect(set.status).toBeTruthy()
    expect(set.status).toMatch('done');
    expect(set.action).toBeTruthy();
    expect(set.action).toMatch('check');
  });
  it('setTheme - invalidTheme', () => {
    theme.setTheme('invalidTheme');
    const set = theme.checkTheme();
    expect(set).toBeTruthy();
    expect(set.theme).toMatch('light');
    expect(set.status).toBeTruthy()
    expect(set.status).toMatch('done');
    expect(set.action).toBeTruthy();
    expect(set.action).toMatch('check');
  });
});