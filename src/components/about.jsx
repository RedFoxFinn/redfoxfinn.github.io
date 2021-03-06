
/*
  Author:       RedFoxFinn - Antti Aarnio
  Project:      RedFoxFinn.github.io
  File:         ./src/components/about.jsx
  Description:  Component that provides app information page
*/

import React, { Fragment } from 'react';

import Text from './text';
import idGen from '../tools/idGen';
import text from '../tools/text';
import language from '../tools/language';
import styles from '../tools/styles';

let texts;

/*
  Function name:      generateFrameworksLibraries
  Function type:      arrow function / helper
  Description:        generateFrameworksLibraries returns application development information
                      wrapped inside React Fragment
  Parameters:         function takes and uses following props (parameters):
                      id | generated component id
*/

const generateFrameworksLibraries = (id, lang) => {
  const devPackages = text.devPackages();
  const packages = text.packages();
  return <Fragment>
    <Text.HeaderText id={idGen(`${id}`, 'headerText')} content={texts[1]}/>
    <Text.PackageText id={idGen(`${id}`, 'packageText', 1)} packageTypes={text.dependencies(lang)} packages={packages}/>
    <Text.PackageText id={idGen(`${id}`, 'packageText', 2)} packageTypes={text.devDependencies(lang)} packages={devPackages}/>
  </Fragment>;
};

/*
  Function name:      generateSoftwareTools
  Function type:      arrow function / helper
  Description:        generateSoftwareTools returns application development information
                      wrapped inside React Fragment
  Parameters:         function takes and uses following props (parameters):
                      id | generated component id
*/

const generateSoftwareTools = (id) => {
  const softTools = text.devSoftware();
  return <Fragment>
    <Text.HeaderText id={idGen(`${id}`, 'headerText')} content={texts[2]} />
    {softTools.map(softTool => {
      let genId;
      softTool?.with
        ? genId = idGen(`${id}`, 'detailText', softTools.indexOf(softTool))
        : genId = idGen(`${id}`, 'shortText', softTools.indexOf(softTool));
      return softTool.with
        ? <Text.DetailText id={genId} key={genId} content={softTool} />
        : <Text.ShortText id={genId} key={genId} content={softTool.name}/>
    })}
  </Fragment>;
};

/*
  Function name:      About
  Function type:      React functional component
  Description:        About returns about page as component for rendering
                      About is a info page of the application
  Parameters:         About takes and uses following props (parameters):
                      id | generated component id
*/

const About = (props) => {
  const lang = language.checkLang();
  texts = text.about(lang);
  return <section id={`${props.id}`} data-testid={`${props.id}`} style={styles.componentMaster()}>
    <Text.HeaderText id={idGen(`${props.id}`, 'headerText')} content={texts[0]} altStyle={true}/>
    {generateSoftwareTools(props.id)}
  </section>;
};

export default About;