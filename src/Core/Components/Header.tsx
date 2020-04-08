import React from 'react'
import Styled from 'styled-components'

import { Color, Dimension, position, size } from '../../Style'

import logo from '../../Style/Images/logo.svg'

interface Props extends React.ComponentPropsWithoutRef<'header'> {

}

const Root = Styled.header`
    ${position('fixed')}
    ${size('100%', Dimension.HEADER_HEIGHT, true)}
    background-color: ${Color.DARKEST};
`

const Header: React.FC<Props> = ({ ...props }) => {

    return (
        <Root {...props}>

        </Root>
    )
}

export default Header