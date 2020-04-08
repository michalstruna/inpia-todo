import React from 'react'
import Styled from 'styled-components'

import { Color, Dimension, position, size, logo, ZIndex } from '../../Style'

interface Props extends React.ComponentPropsWithoutRef<'header'> {

}

const Root = Styled.header`
    ${position('fixed')}
    ${size('100%', Dimension.HEADER_HEIGHT, true)}
    background-color: ${Color.DARKEST};
    z-index: ${ZIndex.HEADER};
`

const Inner = Styled.div`
    margin: 0 auto;
    width: ${Dimension.LAYOUT_WIDTH};
    max-width: calc(100% - 1rem);
`

const Logo = Styled.img`
    ${size(Dimension.HEADER_HEIGHT)}
    float: left;
`

const Title = Styled.h1`
    display: inline-block;
    font-size: 150%;
    margin: 0;
    margin-left: 0.5rem;
`

const Header: React.FC<Props> = ({ ...props }) => {

    return (
        <Root {...props}>
            <Inner>
                <Logo src={logo} />
                <Title>
                    React TODO
                </Title>
            </Inner>
        </Root>
    )
}

export default Header