import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body, root {
    overflow-x: hidden;
	font-size: 14px;

    }

`

export default GlobalStyle;