import styled, { css } from 'styled-components'
// import React from 'react'

const NewNoteBox = styled.div`
   position: relative;
   left: 42%;
   width: 15%;
   background-color: #bbdefb;
   text-align: center;
   padding: 10px 2px;
`

const NoteTextArea = styled.textarea`
   display: block;
   position: relative;
   left: 15%;
   width: 70%;
   height: 50%;
`

function CreateNote({ notes, setNotes }){

    function handleSubmit(e){
        e.preventDefault()
        const newNote = e.target.note.value
        setNotes(previousNotes => [newNote, ...previousNotes])
        e.target.reset()
    }

    return (
      <NewNoteBox>
            <form onSubmit={handleSubmit}>
               <NoteTextArea name="note" />
               <input type="submit" value="Criar" />
            </form>
      </NewNoteBox>
    )
}

export default CreateNote
