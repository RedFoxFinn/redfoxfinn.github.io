/* eslint-disable import/no-anonymous-default-export */

/*
  Author:       RedFoxFinn - Antti Aarnio
  Project:      RedFoxFinn.github.io
  File:         ./src/tools/styles.js
  Description:  Tool that provides inline styling for React components
*/

const units = Object.freeze({
    PX: 'px',
    EM: 'em'
});

export const getUnits = () => {
    return units;
};

const sizes = Object.freeze({
    XXS: 0.25,
    XS: 0.5,
    S: 0.75,
    M: 1,
    L: 1.25,
    XL: 1.5,
    XXL: 1.75
});

export const getSizes = () => {
    return sizes;
};

const colors = Object.freeze({
    BLACK: 'black',
    GREY: 'grey',
    DIMGRAY: 'dimgray',
    VIOLET: 'violet',
    RED: 'red',
    ORANGE: 'orange',
    DARKORANGE: 'darkorange',
    YELLOW: 'yellow',
    GREEN: 'green',
    CYAN: 'cyan',
    BLUE: 'blue',
    FORESTGREEN: 'forestgreen',
    TRANSPARENT: 'transparent',
    WHITE: 'white'
});

export const getColors = () => {
    return colors;
};

const customColors = Object.freeze({
    RED_C: '#dc4233',
    GRADIENT_LIGHT: `linear-gradient(-45deg, ${colors.WHITE}, ${colors.DARKORANGE})`,
    GRADIENT_DARK: `linear-gradient(-45deg, ${colors.BLACK}, ${colors.DIMGRAY}, ${colors.DARKORANGE})`
});

export const getCustomColors = () => {
    return customColors
};

const decorations = Object.freeze({
    UNDERLINE: 'underline'
});

export const getDecorations = () => {
    return decorations;
};

const extras = Object.freeze({
    SOLID: 'solid',
    DASHED: 'dashed'
});

export const getExtras = () => {
    return extras;
};

const directions = Object.freeze({
    COLUMN: 'column',
    ROW: 'row'
});

export const getDirections = () => {
    return directions;
};

const display = Object.freeze({
    BLOCK: 'block',
    FLEX: 'flex'
});

export const getDisplay = () => {
    return display;
};

const positions = Object.freeze({
    TOP: 'top',
    BOTTOM: 'bottom',
    CENTER: 'center',
    LEFT: 'left',
    RIGHT: 'right'
});

export const getPositions = () => {
    return positions;
};

// Function definitions for styling tool

const column = () => {
    return {
        display: display.FLEX, 
        flexDirection: directions.COLUMN, 
        alignItems: positions.CENTER, 
        alignContent: positions.CENTER
    };
};

const sortings = () => {
    return {
        marginLeft: `${sizes.M}${units.EM}`, 
        marginRight: `${sizes.M}${units.EM}`, 
        display: display.FLEX, 
        flexDirection: directions.COLUMN, 
        alignItems: positions.CENTER, 
        alignContent: positions.CENTER
    };
};

const row = () => {
    return {
        display: display.FLEX, 
        flexDirection: directions.ROW, 
        alignItems: positions.CENTER, 
        alignContent: positions.CENTER
    };
};

const infoRow = () => {
    return {
        display: display.FLEX, 
        flexDirection: directions.ROW, 
        alignItems: positions.CENTER, 
        alignContent: positions.CENTER, 
        height: `${4*sizes.M}${units.EM}`
    };
};

const header_first = () => {
    return {
        fontSize: `${3*sizes.M}${units.EM}`, 
        color: colors.BLACK
    };
};

const header_optional = () => {
    return {
        fontSize: `${2*sizes.L}${units.EM}`, 
        color: colors.BLACK
    };
};

const header_second = () => {
    return {
        fontSize: `${sizes.M}${units.EM}`, 
        color: colors.GREY
    };
};

const footer_first = () => {
    return {
        fontSize: `${sizes.M}${units.EM}`,
        color: colors.BLACK
    };
};

const footer_second = () => {
    return {
        fontSize: `${sizes.M}${units.EM}`,
        color: colors.GREY,
        marginLeft: `${sizes.XS}${units.EM}`
    };
};
const footer_third = () => {
    return {
        fontSize: `${sizes.M}${units.EM}`,
        color: colors.GREY,
        marginLeft: `${sizes.XS}${units.EM}`
    };
};

const underlined = (weekday, size = `${sizes.M}${units.EM}`, color = colors.GREY) => {
    const fontSize = size;
    const fontColor = color;
    const marginLeft = `${sizes.XS}${units.EM}`;
    switch (weekday) {
        case 1: return {
            fontSize: fontSize,
            color: fontColor,
            marginLeft: marginLeft,
            textDecoration: `${decorations.UNDERLINE} ${extras.SOLID} ${colors.RED}`
        };
        case 2: return {
            fontSize: fontSize,
            color: fontColor,
            marginLeft: marginLeft,
            textDecoration: `${decorations.UNDERLINE} ${extras.SOLID} ${colors.ORANGE}`
        };
        case 3: return {
            fontSize: fontSize,
            color: fontColor,
            marginLeft: marginLeft,
            textDecoration: `${decorations.UNDERLINE} ${extras.SOLID} ${colors.YELLOW}`
        };
        case 4: return {
            fontSize: fontSize,
            color: fontColor,
            marginLeft: marginLeft,
            textDecoration: `${decorations.UNDERLINE} ${extras.SOLID} ${colors.GREEN}`
        };
        case 5: return {
            fontSize: fontSize,
            color: fontColor,
            marginLeft: marginLeft,
            textDecoration: `${decorations.UNDERLINE} ${extras.SOLID} ${colors.CYAN}`
        };
        case 6: return {
            fontSize: fontSize,
            color: fontColor,
            marginLeft: marginLeft,
            textDecoration: `${decorations.UNDERLINE} ${extras.SOLID} ${colors.BLUE}`
        };
        case 0: return {
            fontSize: fontSize,
            color: fontColor,
            marginLeft: marginLeft,
            textDecoration: `${decorations.UNDERLINE} ${extras.SOLID} ${colors.VIOLET}`
        };
        default: return {
            fontSize: fontSize,
            color: fontColor,
            marginLeft: marginLeft,
            textDecoration: `${decorations.UNDERLINE} ${extras.SOLID} black`
        };
    }
};

const textS = () => {
    return {
        fontSize: `${sizes.S}${units.EM}`,
        color: colors.GREY,
        maxWidth: `${24*sizes.M}${units.EM}`
    };
};

const textM = () => {
    return {
        fontSize: `${sizes.M}${units.EM}`,
        color: colors.BLACK,
        maxWidth: `${24*sizes.M}${units.EM}`
    };
};

const textL = () => {
    return {
        fontSize: `${sizes.L}${units.EM}`, 
        color: colors.BLACK,
        maxWidth: `${24*sizes.M}${units.EM}`
    };
};

const textXL = () => {
    return {
        fontSize: `${sizes.XL}${units.EM}`,
        color: colors.BLACK,
        maxWidth: `${24*sizes.M}${units.EM}`
    };
};

const success = () => {
    return {
        fontSize: `${sizes.M}${units.EM}`, 
        color: colors.FORESTGREEN
    };
};

const sortingButton = () => {
    return {
        marginBottom: `${sizes.XS}${units.EM}`,
        width: `${12*sizes.M}${units.EM}`,
        height: `${2*sizes.M}${units.EM}`,
        outline: `${sizes.M}${units.PX} solid ${customColors.RED_C}`, 
        border: `${sizes.M}${units.PX} solid ${colors.TRANSPARENT}`, 
        background: colors.TRANSPARENT
    };
};

const marginS = () => {
    return {
        marginLeft: `${sizes.S}${units.EM}`,
        marginRight: `${sizes.S}${units.EM}`
    };
};

const marginM = () => {
    return {
        marginLeft: `${sizes.M}${units.EM}`,
        marginRight: `${sizes.M}${units.EM}`
    };
};

const marginL = () => {
    return {
        marginLeft: `${sizes.L}${units.EM}`,
        marginRight: `${sizes.L}${units.EM}`
    };
};

const getBackgroundGradient = (selection) => {
    return selection === 'light'
    ? customColors.GRADIENT_LIGHT
    : customColors.GRADIENT_DARK;
};

const componentMaster = () => {
    return {
        display: display.FLEX,
        flexDirection: directions.COLUMN,
        alignContent: positions.CENTER,
        alignItems: positions.CENTER,
        margin: `${sizes.M}${units.EM}`
    };
};

const rootElement = () => {
    return {
        display: display.FLEX,
        flexDirection: directions.COLUMN, 
        alignItems: positions.CENTER, 
        alignContent: positions.CENTER
    };
};

//   styling tool exporting

export default {
    getBackgroundGradient, rootElement, componentMaster,
    row, column, infoRow, 
    sortingButton, sortings, success,
    header_first, header_second, header_optional, underlined,
    footer_first, footer_second, footer_third,
    textS, textM, textL, textXL,
    marginS, marginM, marginL
};