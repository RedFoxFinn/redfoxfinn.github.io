
/*
  Author:       RedFoxFinn - Antti Aarnio
  Project:      RedFoxFinn.github.io
  File:         ./src/tools/idGen.js
  Description:  Tool that generates id's for the components or elements using parent id
*/

const idGen = (parentId, idFor, ...rest) => {
  switch (idFor) {
    case 'app': return `${parentId}.app`;
    case 'header': return `${parentId}.app.header`;
    case 'footer': return `${parentId}.app.footer`;
    case 'navigator': return `${parentId}.app.navigator`;
    case 'home': return `${parentId}.app.home`;
    case 'about': return `${parentId}.app.about`;
    case 'cv': return `${parentId}.app.cv`;
    case 'links': return `${parentId}.app.links`;
    case 'navHome': return `${parentId}.navHome`;
    case 'navCV': return `${parentId}.navCV`;
    case 'navAbout': return `${parentId}.navAbout`;
    case 'navLinks': return `${parentId}.navLinks`;
    case 'text': return `${parentId}.text.${rest[0]}`;
    case 'shortText': return `${parentId}.shortText.${rest[0]}`;
    case 'longText': return `${parentId}.longText.${rest[0]}`;
    default: return `${parentId}.default`;
  }
};

export default idGen;