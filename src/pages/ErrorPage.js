import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {

  const error = useRouteError()
  return (
    <div>
      <h1>Page introuvable</h1>
      <p>{error.error.message}</p>
    </div>
  );
};

export default ErrorPage;