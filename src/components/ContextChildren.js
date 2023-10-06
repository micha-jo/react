import React from 'react';
import { useBlog } from '../blog-context';

import { styled} from 'styled-components'

const ButtonStyled = styled.button`
  padding: 10px;
  border: 3px solid #9a8c98;
  border-radius: 20px;
  color: ${props => props.theme === 'light' ? 'black' : 'white'};
  background: ${props => props.theme === 'light' ? 'white' : 'black'}
`
const ContextChildren = () => {
  const blogData = useBlog () 
  console.log(blogData.theme)
  return (
    <div>
      <h3>Context Children</h3>
      <ButtonStyled onClick={()=>{blogData.onThemeChange()}} theme={blogData.userPreferences.theme}>
        Changer Le theme
      </ButtonStyled>
      
    </div>
  );
};

export default ContextChildren;