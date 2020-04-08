import { createGlobalStyle } from 'styled-components'

import { Color, hoverShadow } from '../../Style'

export default createGlobalStyle`

    body {
        background-color: ${Color.MEDIUM_DARK};
        color: ${Color.LIGHT};
        margin: 0;
    }
    
    body, input, button, textarea {
        font-family: Arial;
    }
    
    button, input, textarea {
        background-color: transparent;
        box-sizing: border-box;
        border: none;
        color: inherit;
        font-size: 100%;
        outline: none;
    }
    
    input, textarea {
        border-bottom: 1px solid ${Color.LIGHT};
        padding: 0.5rem;
    }
    
    button {
        ${hoverShadow(Color.MEDIUM)};
        border-radius: 0.3rem;
        cursor: pointer;
        font-weight: bold;
        padding: 0.5rem 1rem;
        user-select: none;
        
        &:disabled {
            background-color: ${Color.MEDIUM};
            pointer-events: none;        
        }
    }
`