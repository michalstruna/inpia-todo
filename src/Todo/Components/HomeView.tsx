import React from 'react'
import Styled from 'styled-components'
import TodoList from './TodoList'

interface Static {

}

interface Props extends React.ComponentPropsWithoutRef<'div'> {

}

const Root = Styled.div`
    margin: 0 auto;
    overflow: hidden;
    max-width: calc(100% - 1rem);
`

const HomeView: React.FC<Props> & Static = ({ ...props }) => {

    return (
        <Root {...props}>
            <TodoList />
        </Root>
    )

}

export default HomeView