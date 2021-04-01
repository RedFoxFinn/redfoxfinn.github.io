
const idGen = (parentId, idFor) => {
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
    case 'text': return `${parentId}.text`;
    case 'shortText': return `${parentId}.shortText`;
    case 'longText': return `${parentId}.longText`;
    default: return `${parentId}.default`;
  }
};

export default idGen;