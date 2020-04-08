import { css } from 'styled-components'

export const size = (width: string = '100%', height: string = width, singleLine?: boolean) => css`
    height: ${height};
   width: ${width};
   
    ${singleLine && `
        line-height: ${height};
    `}
`

type PositionType = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'

export const position = (type: PositionType = 'absolute', left: string = '0', top: string = '0', right: string = 'auto', bottom: string = 'auto') => css`
    bottom: ${bottom};
    left: ${left};
    position: ${type};
    right: ${right};
    top: ${top};

`