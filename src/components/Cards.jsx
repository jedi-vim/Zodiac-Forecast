import React from "react"
import styled from "styled-components"

const NotesListHTML = styled.ul`
`

const NotePostSheet = styled.li`
   display: inline;
   margin: 3px;
   padding: 2px;
   border: #4B0082 solid;
   background-color: #FFF0F5;
   text-color: #F5FFFA;
   width: 30px;
   height: 45px
`

function Cards({ notes }){
    const notesList = notes.map(note=> <NotePostSheet>{note}</NotePostSheet>)
    return (
    <NotesListHTML>
        { notesList }
    </NotesListHTML>
    )
}

export default Cards
