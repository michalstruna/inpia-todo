import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Color } from '../../Style'

export default createGlobalStyle`

    body {
        background-color: ${Color.MEDIUM_DARK};
        margin: 0;
    }
    
    body, input, button {
        font-family: Arial;
    }

`