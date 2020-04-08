import { css } from 'styled-components'
import { Duration } from '../index'

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

export const hoverShadow = (color: string, size: string = '0.4rem 0.1rem') => css`
    background-color: ${color};
    transition: all ${Duration.MEDIUM};
    
    &:hover {
        box-shadow: 0 0 ${size} ${color};
    }

`