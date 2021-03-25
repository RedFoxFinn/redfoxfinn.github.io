import uuid from 'uuid';
import language from './language';

describe('tool unit tests - language', () => {
  const randomLang = uuid;
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('checkLang', () => {
    let lang = language.checkLang();
    expect(lang).toMatch('en');
    localStorage.setItem('rff.io.lang', 'fi');
    lang = language.checkLang();
    expect(lang).toMatch('fi');
  });
  it('setLang - en', () => {
    const setLangEn = language.setLang('en');
    expect(setLangEn).toBeTruthy();
    expect(setLangEn.status).toMatch('done');
    expect(setLangEn.action).toMatch('set');
    expect(setLangEn.lang).toMatch('en');
  });
  it('setLang - fi', () => {
    const setLangFi = language.setLang('fi');
    expect(setLangFi).toBeTruthy();
    expect(setLangFi.status).toMatch('done');
    expect(setLangFi.action).toMatch('set');
    expect(setLangFi.lang).toMatch('fi');
  });
  it('setLang - any other', () => {
    const setLangOther = language.setLang(`${randomLang}`);
    expect(setLangOther).toBeTruthy();
    expect(setLangOther.status).toMatch('done');
    expect(setLangOther.action).toMatch('autoSet');
    expect(setLangOther.lang).toMatch('fi');
  });
});