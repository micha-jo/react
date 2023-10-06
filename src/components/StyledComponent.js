import {ThemeProvider, styled} from 'styled-components'

import Theme from '../theme/theme.js'


const Paragraphe = styled.p`
  padding: ${props=> props.padding}px;
  border: 3px solid #9a8c98;
  border-radius: ${props=> props.radius};
  color: ${props => props.theme.light};
  background: ${props => props.theme.primary}
`

const ParagrapheStyled = styled(Paragraphe)`
  background-color: ${props => props.darkmode === 'dark' ? 'darkgray' : 'white'};
  color:  ${props => props.darkmode === 'dark' ? 'white' : 'darkgray'}; 
`


const StyledComponent = ({darkMode}) => {
  const padding = 10
  return(
    <>
      <ThemeProvider theme={Theme}>
        <Paragraphe  padding={padding} radius="20px">Styled Component avec theme provider</Paragraphe>

        <ParagrapheStyled darkmode='dark' padding={padding} radius="20px">Styled Componentavec theme provider et dark mode</ParagrapheStyled> 

      </ThemeProvider>

      <ParagrapheStyled darkmode={darkMode} padding={padding} radius="20px">Styled Component</ParagrapheStyled> 

    </>

    
  )
}
export default StyledComponent

