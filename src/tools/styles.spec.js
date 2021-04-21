/* eslint-disable no-lone-blocks */
/* eslint-disable jest/no-conditional-expect */
import styles, {
  getUnits, getSizes, getColors, getCustomColors,
  getDecorations, getExtras, getDirections, getDisplay,
  getPositions
} from './styles';

describe('tool unit tests - styles', () => {
  const units = getUnits();
  const sizes = getSizes();
  const colors = getColors();
  const customColors = getCustomColors();
  const decorations = getDecorations();
  const extras = getExtras();
  const directions = getDirections();
  const display = getDisplay();
  const positions = getPositions();

  const weekDays = Object.freeze({
    sun: 0,
    mon: 1,
    tue: 2,
    wed: 3,
    thu: 4,
    fri: 5,
    sat: 6
  });

  let dummy = false;

  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('column', () => {
    const style = styles.column();
    expect(style).toBeTruthy();
    expect(style.display).toBeTruthy();
    expect(style.display).toMatch(display.FLEX);
    expect(style.flexDirection).toBeTruthy();
    expect(style.flexDirection).toMatch(directions.COLUMN);
    expect(style.alignItems).toBeTruthy();
    expect(style.alignItems).toMatch(positions.CENTER);
    expect(style.alignContent).toBeTruthy();
    expect(style.alignContent).toMatch(positions.CENTER);
  });
  it('sortings', () => {
    const style = styles.sortings();
    expect(style).toBeTruthy();
    expect(style.marginLeft).toBeTruthy();
    expect(style.marginLeft).toMatch(`${sizes.M}${units.EM}`);
    expect(style.marginRight).toBeTruthy();
    expect(style.marginRight).toMatch(`${sizes.M}${units.EM}`);
    expect(style.display).toBeTruthy();
    expect(style.display).toMatch(display.FLEX);
    expect(style.flexDirection).toBeTruthy();
    expect(style.flexDirection).toMatch(directions.COLUMN);
    expect(style.alignItems).toBeTruthy();
    expect(style.alignItems).toMatch(positions.CENTER);
    expect(style.alignContent).toBeTruthy();
    expect(style.alignContent).toMatch(positions.CENTER);
  });
  it('row', () => {
    const style = styles.row();
    expect(style).toBeTruthy();
    expect(style.display).toBeTruthy();
    expect(style.display).toMatch(display.FLEX);
    expect(style.flexDirection).toBeTruthy();
    expect(style.flexDirection).toMatch(directions.ROW);
    expect(style.alignItems).toBeTruthy();
    expect(style.alignItems).toMatch(positions.CENTER);
    expect(style.alignContent).toBeTruthy();
    expect(style.alignContent).toMatch(positions.CENTER);
  });
  it('infoRow', () => {
    const style = styles.infoRow();
    expect(style).toBeTruthy();
    expect(style.height).toBeTruthy();
    expect(style.height).toMatch(`${4*sizes.M}${units.EM}`);
    expect(style.display).toBeTruthy();
    expect(style.display).toMatch(display.FLEX);
    expect(style.flexDirection).toBeTruthy();
    expect(style.flexDirection).toMatch(directions.ROW);
    expect(style.alignItems).toBeTruthy();
    expect(style.alignItems).toMatch(positions.CENTER);
    expect(style.alignContent).toBeTruthy();
    expect(style.alignContent).toMatch(positions.CENTER);
  });
  it('header_first', () => {
    const style = styles.header_first();
    expect(style).toBeTruthy();
    expect(style.fontSize).toBeTruthy();
    expect(style.fontSize).toMatch(`${3*sizes.M}${units.EM}`);
    expect(style.color).toBeTruthy();
    expect(style.color).toMatch(colors.BLACK);
  });
  it('header_optional', () => {
    const style = styles.header_optional();
    expect(style).toBeTruthy();
    expect(style.fontSize).toBeTruthy();
    expect(style.fontSize).toMatch(`${2*sizes.L}${units.EM}`);
    expect(style.color).toBeTruthy();
    expect(style.color).toMatch(colors.BLACK);
  });
  it('header_second', () => {
    const style = styles.header_second();
    expect(style).toBeTruthy();
    expect(style.fontSize).toBeTruthy();
    expect(style.fontSize).toMatch(`${sizes.M}${units.EM}`);
    expect(style.color).toBeTruthy();
    expect(style.color).toMatch(colors.GREY);
  });
  it('footer_first', () => {
    const style = styles.footer_first();
    expect(style).toBeTruthy();
    expect(style.fontSize).toBeTruthy();
    expect(style.fontSize).toMatch(`${sizes.M}${units.EM}`);
    expect(style.color).toBeTruthy();
    expect(style.color).toMatch(colors.BLACK);
  });
  it('footer_second', () => {
    const style = styles.footer_second();
    expect(style).toBeTruthy();
    expect(style.marginLeft).toBeTruthy();
    expect(style.marginLeft).toMatch(`${sizes.XS}${units.EM}`);
    expect(style.fontSize).toBeTruthy();
    expect(style.fontSize).toMatch(`${sizes.M}${units.EM}`);
    expect(style.color).toBeTruthy();
    expect(style.color).toMatch(colors.GREY);
  });
  it('footer_third', () => {
    const style = styles.footer_third();
    expect(style).toBeTruthy();
    expect(style.marginLeft).toBeTruthy();
    expect(style.marginLeft).toMatch(`${sizes.XS}${units.EM}`);
    expect(style.fontSize).toBeTruthy();
    expect(style.fontSize).toMatch(`${sizes.M}${units.EM}`);
    expect(style.color).toBeTruthy();
    expect(style.color).toMatch(colors.GREY);
  });
  it('underlined', () => {
    const days = Object.entries(weekDays);
    for (let i = 0; i < days.length; i++) {
      const style = styles.underlined(days[i][1]);
      expect(style).toBeTruthy();
      expect(style.fontSize).toBeTruthy();
      expect(style.fontSize).toMatch(`${sizes.M}${units.EM}`);
      expect(style.color).toBeTruthy();
      expect(style.color).toMatch(colors.GREY);
      expect(style.marginLeft).toBeTruthy();
      expect(style.marginLeft).toMatch(`${sizes.XS}${units.EM}`);
      expect(style.textDecoration).toBeTruthy();
      switch(days[i][1]) {
        case 0: {
          expect(style.textDecoration).toMatch(`${decorations.UNDERLINE} ${extras.SOLID} ${colors.VIOLET}`);
          break;
        };
        case 1: {
          expect(style.textDecoration).toMatch(`${decorations.UNDERLINE} ${extras.SOLID} ${colors.RED}`);
          break;
        };
        case 2: {
          expect(style.textDecoration).toMatch(`${decorations.UNDERLINE} ${extras.SOLID} ${colors.ORANGE}`);
          break;
        };
        case 3: {
          expect(style.textDecoration).toMatch(`${decorations.UNDERLINE} ${extras.SOLID} ${colors.YELLOW}`);
          break;
        };
        case 4: {
          expect(style.textDecoration).toMatch(`${decorations.UNDERLINE} ${extras.SOLID} ${colors.GREEN}`);
          break;
        };
        case 5: {
          expect(style.textDecoration).toMatch(`${decorations.UNDERLINE} ${extras.SOLID} ${colors.CYAN}`);
          break;
        };
        case 6: {
          expect(style.textDecoration).toMatch(`${decorations.UNDERLINE} ${extras.SOLID} ${colors.BLUE}`);
          break;
        };
        default: throw new Error('Invalid DoW (Day of Week');
      }
    }
  });
  it('textS', () => {
    const style = styles.textS();
    expect(style).toBeTruthy();
    expect(style.fontSize).toBeTruthy();
    expect(style.fontSize).toMatch(`${sizes.S}${units.EM}`);
    expect(style.color).toBeTruthy();
    expect(style.color).toMatch(colors.GREY);
    expect(style.maxWidth).toBeTruthy();
    expect(style.maxWidth).toMatch(`${24*sizes.M}${units.EM}`);
  });
  it('textM', () => {
    const style = styles.textM();
    expect(style).toBeTruthy();
    expect(style.fontSize).toBeTruthy();
    expect(style.fontSize).toMatch(`${sizes.M}${units.EM}`);
    expect(style.color).toBeTruthy();
    expect(style.color).toMatch(colors.BLACK);
    expect(style.maxWidth).toBeTruthy();
    expect(style.maxWidth).toMatch(`${24*sizes.M}${units.EM}`);
  });
  it('textL', () => {
    const style = styles.textL();
    expect(style).toBeTruthy();
    expect(style.fontSize).toBeTruthy();
    expect(style.fontSize).toMatch(`${sizes.L}${units.EM}`);
    expect(style.color).toBeTruthy();
    expect(style.color).toMatch(colors.BLACK);
    expect(style.maxWidth).toBeTruthy();
    expect(style.maxWidth).toMatch(`${24*sizes.M}${units.EM}`);
  });
  it('textXL', () => {
    const style = styles.textXL();
    expect(style).toBeTruthy();
    expect(style.fontSize).toBeTruthy();
    expect(style.fontSize).toMatch(`${sizes.XL}${units.EM}`);
    expect(style.color).toBeTruthy();
    expect(style.color).toMatch(colors.BLACK);
    expect(style.maxWidth).toBeTruthy();
    expect(style.maxWidth).toMatch(`${24*sizes.M}${units.EM}`);
  });
  it('success', () => {
    const style = styles.success();
    expect(style).toBeTruthy();
    expect(style.fontSize).toBeTruthy();
    expect(style.fontSize).toMatch(`${sizes.M}${units.EM}`);
    expect(style.color).toBeTruthy();
    expect(style.color).toMatch(colors.FORESTGREEN);
  });
  it('marginS', () => {
    const style = styles.marginS();
    expect(style).toBeTruthy();
    expect(style.marginLeft).toBeTruthy();
    expect(style.marginLeft).toMatch(`${sizes.S}${units.EM}`);
    expect(style.marginRight).toBeTruthy();
    expect(style.marginRight).toMatch(`${sizes.S}${units.EM}`);
  });
  it('marginM', () => {
    const style = styles.marginM();
    expect(style).toBeTruthy();
    expect(style.marginLeft).toBeTruthy();
    expect(style.marginLeft).toMatch(`${sizes.M}${units.EM}`);
    expect(style.marginRight).toBeTruthy();
    expect(style.marginRight).toMatch(`${sizes.M}${units.EM}`);
  });
  it('marginL', () => {
    const style = styles.marginL();
    expect(style).toBeTruthy();
    expect(style.marginLeft).toBeTruthy();
    expect(style.marginLeft).toMatch(`${sizes.L}${units.EM}`);
    expect(style.marginRight).toBeTruthy();
    expect(style.marginRight).toMatch(`${sizes.L}${units.EM}`);
  });
  it('backgroundGradient - light', () => {
    const gradient = styles.getBackgroundGradient('light');
    expect(gradient).toBeTruthy();
    expect(gradient).toMatch(customColors.GRADIENT_LIGHT);
  });
  it('backgroundGradient - dark', () => {
    const gradient = styles.getBackgroundGradient('dark');
    expect(gradient).toBeTruthy();
    expect(gradient).toMatch(customColors.GRADIENT_DARK);
  });
  it('componentMaster', () => {
    const style = styles.componentMaster();
    expect(style).toBeTruthy();
    expect(style.margin).toBeTruthy();
    expect(style.margin).toMatch(`${sizes.M}${units.EM}`);
    expect(style.display).toBeTruthy();
    expect(style.display).toMatch(display.FLEX);
    expect(style.alignItems).toBeTruthy();
    expect(style.alignItems).toMatch(positions.CENTER);
    expect(style.alignContent).toBeTruthy();
    expect(style.alignContent).toMatch(positions.CENTER);
  });
  it('rootElement', () => {
    const style = styles.rootElement();
    expect(style).toBeTruthy();
    expect(style.display).toBeTruthy();
    expect(style.display).toMatch(display.FLEX);
    expect(style.flexDirection).toBeTruthy();
    expect(style.flexDirection).toMatch(directions.COLUMN);
    expect(style.alignItems).toBeTruthy();
    expect(style.alignItems).toMatch(positions.CENTER);
    expect(style.alignContent).toBeTruthy();
    expect(style.alignContent).toMatch(positions.CENTER);
  });
});