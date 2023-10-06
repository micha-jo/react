import React from 'react';
import LifeCycleFunctionComponent from '../components/LifeCycleFunctionComponent';
import LifeCycleClassComponents from '../components/LifeCycleClassComponent';

const LifeCyclePage = () => {
  return (
    <div>
      <section>
          <h2>Cycle de vie</h2>
          <LifeCycleClassComponents/>
          <LifeCycleFunctionComponent/>
        </section>
    </div>
  );
};

export default LifeCyclePage;