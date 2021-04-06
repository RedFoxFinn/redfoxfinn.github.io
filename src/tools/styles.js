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

const header_dateTime = (weekday) => {
    const fontSize = '1.1em';
    const color = 'grey';
    const marginLeft = '0.2em';
    const underlines = ['Violet','Red','Orange','Yellow','Green','Cyan','Blue'];
    switch (weekday) {
        case 'monday': return {
            fontSize: fontSize,
            color: color,
            marginLeft: marginLeft,
            textDecoration: `underline solid ${underlines[1]}`
        };
        case 'tuesday': return {
            fontSize: fontSize,
            color: color,
            marginLeft: marginLeft,
            textDecoration: `underline solid ${underlines[2]}`
        };
        case 'wednesday': return {
            fontSize: fontSize,
            color: color,
            marginLeft: marginLeft,
            textDecoration: `underline solid ${underlines[3]}`
        };
        case 'thursday': return {
            fontSize: fontSize,
            color: color,
            marginLeft: marginLeft,
            textDecoration: `underline double ${underlines[4]}`
        };
        case 'friday': return {
            fontSize: fontSize,
            color: color,
            marginLeft: marginLeft,
            textDecoration: `underline solid ${underlines[5]}`
        };
        case 'saturday': return {
            fontSize: fontSize,
            color: color,
            marginLeft: marginLeft,
            textDecoration: `underline solid ${underlines[6]}`
        };
        case 'sunday': return {
            fontSize: fontSize,
            color: color,
            marginLeft: marginLeft,
            textDecoration: `underline solid ${underlines[0]}`
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

const body = (selection) => {
    return selection === 'light' ? {
        backgroundImage: 'linear-gradient(-45deg, #ffffff, #ff8c00)',
    } : {
        backgroundImage: 'linear-gradient(-45deg, #000000, #696969, #ff8c00)',
    };
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
    body, header_first, header_second, row, column, infoRow, header_optional, header_dateTime,
    sortingButton, sortings, success, textM, textL,
    footer_first, footer_second, footer_third, textS, rootElement, componentMaster
};