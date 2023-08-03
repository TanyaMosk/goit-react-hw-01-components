import { createGlobalStyle } from 'styled-components'
import 'modern-normalize'

export const GlobalStyle = createGlobalStyle`
body {
//   margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* max-width: 600px; */
  /* margin: auto; */
  padding: 30px;
  background-color: gainsboro;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
ul,
li {
  list-style:none;
  margin: 0;
  padding: 0;
}
p{
  margin: 0;
}

`;