import React, { useState } from 'react'
import styled from 'styled-components'

import CreateNote from './components/CreateNote.jsx'
import Cards from './components/Cards.jsx'

const MainTitle = styled.h4`
    text-align: center;
    border: red dotted 3px;
    width: 15%;
    position: relative;
    left: 42%; 
`

const HeaderPanel = styled.div`
    left: 35%;
    heigth: 10%;
`
function App(){
    const [notes, setNotes] = useState([])
    return (
        <HeaderPanel>
            <MainTitle>React Keep Clone.</MainTitle>
            <CreateNote notes={notes} setNotes={setNotes}/>
            <Cards notes={notes}/>
        </HeaderPanel>
    )
}

export default App
