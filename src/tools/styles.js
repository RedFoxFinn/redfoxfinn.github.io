/* eslint-disable import/no-anonymous-default-export */

/*
  Author:       RedFoxFinn - Antti Aarnio
  Project:      RedFoxFinn.github.io
  File:         ./src/tools/styles.js
  Description:  Tool that provides inline styling for React components
*/

// Function definitions for styling tool

const column = () => {
    return {
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        alignContent: 'center'
    };
};

const sortings = () => {
    return {
        marginLeft: '1em', 
        marginRight: '1em', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        alignContent: 'center'
    };
};

const row = () => {
    return {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        alignContent: 'center'
    };
};

const infoRow = () => {
    return {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        alignContent: 'center', 
        height: '4em'
    };
};

const header_first = () => {
    return {
        fontSize: '3em', 
        color: 'black'
    };
};

const header_optional = () => {
    return {
        fontSize: '2.5em', 
        color: 'black'
    };
};

const footer_first = () => {
    return {
        fontSize: '1em',
        color: 'black'
    };
};

const footer_second = () => {
    return {
        fontSize: '1em',
        color: 'grey',
        marginLeft: '0.5em'
    };
};
const footer_third = () => {
    return {
        fontSize: '1em',
        color: 'grey',
        marginLeft: '0.5em'
    };
};

const underlined = (weekday, size, color) => {
    const fontSize = size ?? '1em';
    const fontColor = color ?? 'grey';
    const marginLeft = '0.5em';
    const colors = ['Violet','Red','Orange','Yellow','Green','Cyan','Blue'];
    switch (weekday) {
        case 1: return {
            fontSize: fontSize,
            color: fontColor,
            marginLeft: marginLeft,
            textDecoration: `underline solid ${colors[1]}`
        };
        case 2: return {
            fontSize: fontSize,
            color: fontColor,
            marginLeft: marginLeft,
            textDecoration: `underline solid ${colors[2]}`
        };
        case 3: return {
            fontSize: fontSize,
            color: fontColor,
            marginLeft: marginLeft,
            textDecoration: `underline solid ${colors[3]}`
        };
        case 4: return {
            fontSize: fontSize,
            color: fontColor,
            marginLeft: marginLeft,
            textDecoration: `underline solid ${colors[4]}`
        };
        case 5: return {
            fontSize: fontSize,
            color: fontColor,
            marginLeft: marginLeft,
            textDecoration: `underline solid ${colors[5]}`
        };
        case 6: return {
            fontSize: fontSize,
            color: fontColor,
            marginLeft: marginLeft,
            textDecoration: `underline solid ${colors[6]}`
        };
        case 0: return {
            fontSize: fontSize,
            color: fontColor,
            marginLeft: marginLeft,
            textDecoration: `underline solid ${colors[0]}`
        };
        default: return null;
    }
};

const header_second = () => {
    return {
        fontSize: '1em', 
        color: 'grey'
    };
};

const textS = () => {
    return {
        fontSize: '0.75em',
        color: 'grey'
    };
};

const textM = () => {
    return {
        fontSize: '1em', 
        color: 'black',
        maxWidth: '24em'
    };
};

const textL = () => {
    return {
        fontSize: '1.25em', 
        color: 'black',
        maxWidth: '24em'
    };
};

const textXL = () => {
    return {
        fontSize: '1.5em',
        color: 'black',
        maxWidth: '24em'
    };
};

const success = () => {
    return {
        fontSize: '1em', 
        color: 'forestgreen'
    };
};

const sortingButton = () => {
    return {
        marginBottom: '0.5em', 
        width: '12em', 
        height: '2em', 
        outline: '1px solid #dc4233', 
        border: '1px solid transparent', 
        background: 'transparent'
    };
};

/*
  Function name:      setAppBody
  Function type:      arrow function / helper
  Desctiption:        setAppBody sets 
                      Root is the first component of the application 
                      Root uses React router for routing between different views
*/

const getBackgroundGradient = (selection) => {
    return selection === 'light'
    ? 'linear-gradient(-45deg, #ffffff, #ff8c00)'
    : 'linear-gradient(-45deg, #000000, #696969, #ff8c00)';
};

const componentMaster = () => {
    return {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        margin: '1em'
    };
};

const rootElement = () => {
    return {
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        alignContent: 'center'
    };
};

//   styling tool exporting

export default {
    getBackgroundGradient, rootElement, componentMaster,
    row, column, infoRow, 
    sortingButton, sortings, success,
    header_first, header_second, header_optional, underlined,
    footer_first, footer_second, footer_third,
    textS, textM, textL, textXL
};