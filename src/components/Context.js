import React from 'react';
import  {BlogProvider} from '../blog-context'
import ContextChildren from './ContextChildren';

const Context = () =>  {
  
  return (
    <BlogProvider>
      <ContextChildren/>
    </BlogProvider>
  );
};

export default Context;