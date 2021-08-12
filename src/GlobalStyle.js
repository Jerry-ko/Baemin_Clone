import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body, root {
	  font-size: 14px;
    line-height: 1.5;
    }

`

export default GlobalStyle;