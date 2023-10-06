import React from 'react';
import { Link } from 'react-router-dom';

import Instalation from '../components/Instalation';
import ClassComponent from '../components/ClassComponent';
import FunctionComponent from '../components/FunctionComponent';
import Props from '../components/Props';
import InlineStyle from '../components/InlineStyle';
import ExternalStyleSheet from '../components/ExternalStyleSheet';
import ModuleCSS from '../components/ModuleCSS';
import StyledComponent from '../components/StyledComponent';
import LifeCycleClassComponent from '../components/LifeCycleClassComponent';
import LifeCycleFunctionComponent from '../components/LifeCycleFunctionComponent';
import Context from '../components/Context';

const AllPage = () => {
  return (
    <div className="All">
      <div className="App-header">
        <h1>REACT</h1>
      </div>

      <div className="App-body">
        <section >
          <h2>Instalation</h2>
          <Instalation/>
        </section>

        <section>
            <h2>Les composants</h2>
            <ClassComponent/>
            <FunctionComponent/>
        </section>

        <section>
          <h2>Properties</h2>
          <Props/>
        </section>

        <section>
          <h2>Style</h2>
          <InlineStyle/>
          <ExternalStyleSheet/>
          <ModuleCSS/>
          <StyledComponent darkMode='light'/>
          
          <p className='paragraphe'>Ce Paragraphe créé dans App.js comporte la className paragraphe il herite du même style que le composant ExternalStyleSheet</p>
        </section>

        <section>
          <h2>Cycle de vie</h2>
          <LifeCycleClassComponent/>
          <LifeCycleFunctionComponent/>
        </section>

        <section>
          <h2>API context</h2>
          <Context/>
        </section>

        <section>
          <h2>React Router</h2>
          <Link to='/react-router'>Lien vers /react-router</Link>
        </section>
      </div>

    </div>
  );
};

export default AllPage;