import React, { useState } from 'react'
import styled from 'styled-components'

import Cards from './components/Cards.jsx'

const MainTitle = styled.h4`
    text-align: center;
    border: red dotted 3px;
    width: 15%;
    position: relative;
    left: 42%;
    font-size: 1.5rem;
`

const HeaderPanel = styled.div`
    left: 35%;
    heigth: 10%;
`

const BodyPanel = styled.div`
    left: 35%;
    heigth: 30%;
`
function App(){
    const [zodiacs, setZodiacs] = useState(
        [
            {"sign": "aries"},
            {"sign": "capricornio"},
            {"sign": "cancer"},
            {"sign": "touro"},
            {"sign": "aquario"},
            {"sign": "escorpiao"},
            {"sign": "gemeos"},
            {"sign": "leao"},
            {"sign": "peixes"},
            {"sign": "sagitario"},
            {"sign": "virgem"},
            {"sign": "libra"}
        ])
    return (
        <div>
            <HeaderPanel>
                <MainTitle>Horoscopo Irma Zuleide</MainTitle>
            </HeaderPanel>
            <BodyPanel>
                <Cards zodiacs={zodiacs} setZodiacs={setZodiacs} />
            </BodyPanel>
        </div>
    )
}

export default App
