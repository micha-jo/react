import React from 'react';
import {Outlet, Link} from 'react-router-dom'

const ReactRouterPage = () => {
  return (
    <div>
      <section>
        <h2>React Router</h2>
        <Link to='react-router'>Lien vers /react-router/react-router</Link>
        <Outlet/>
      </section>
      
    </div>
  );
};

export default ReactRouterPage;