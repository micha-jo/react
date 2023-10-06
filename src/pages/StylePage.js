import React from 'react';
import InlineStyle from '../components/InlineStyle';
import ExternalStyleSheet from '../components/ExternalStyleSheet';
import ModuleCSS from '../components/ModuleCSS';
import StyledComponent from '../components/StyledComponent';

const StylePage = () => {
  return (
    <div>
      <section>
          <h2>Style</h2>
          <InlineStyle/>
          <ExternalStyleSheet/>
          <ModuleCSS/>
          <StyledComponent darkMode='light'/>
          
          <p className='paragraphe'>Ce Paragraphe créé dans App.js comporte la className paragraphe il herite du même style que le composant ExternalStyleSheet</p>
        </section>
    </div>
  );
};

export default StylePage;

