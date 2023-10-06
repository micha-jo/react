import React from 'react';
import ClassComponent from '../components/ClassComponent';
import FunctionComponent from '../components/FunctionComponent';

const ComposantsPage = () => {
  return (
    <div>
      <section>
            <h2>Les composants</h2>
            <ClassComponent/>
            <FunctionComponent/>
        </section>
    </div>
  );
};

export default ComposantsPage;