import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset};
   * {
    box-sizing: border-box;
    font-family:  Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;

  }
  html, body {
    width:100%;
    height:100%;
    font-family:  Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
  }
  
  a {
    text-decoration:none;
  }
  button{
    border: none;
    background: inherit;
    outline: none;
  }
`

export default GlobalStyle
