import React from 'react'
import Styled from 'styled-components'

import Header from './Header'

import '../../App.css'
import GlobalStyle from './GlobalStyle'
import { Dimension } from '../../Style'

interface Props {

}

const Content = Styled.div`
    margin-top: ${Dimension.HEADER_HEIGHT};
    position: relative;
`

const App: React.FC<Props> = ({ children }) => {

    return (
        <>
            <GlobalStyle />
            <Header />
            <Content>
                {children}
            </Content>
        </>
    )
}

export default App
