import React from 'react'
import Styled from 'styled-components'

import { TodoData } from '../types'
import { Color, Duration, fadeIn, hoverShadow, size } from '../../Style'

interface Static {

}

interface Props extends Omit<React.ComponentPropsWithoutRef<'div'>, 'id'>, TodoData {
    onRemove: (id: string) => void
}

const Root = Styled.div`
    align-items: center;
    animation: ${fadeIn} ${Duration.MEDIUM} 1 linear;
    background-color: #333;
    border: 1px solid ${Color.MEDIUM};
    border-top-width: 4px;
    display: flex;
    padding: 0.5rem;
    margin: 0.5rem auto;
`

const Text = Styled.p`
    width: 100%;
`

const RemoveButton = Styled.button`
    ${hoverShadow(Color.RED)};
    ${size('6rem', '2rem')}
`

const Todo: React.FC<Props> & Static = ({ id, text, onRemove, ...props }) => {

    return (
        <Root {...props}>
            <Text>
                {text}
            </Text>
            <RemoveButton onClick={() => onRemove(id)}>
                Remove
            </RemoveButton>
        </Root>
    )

}

export default Todo