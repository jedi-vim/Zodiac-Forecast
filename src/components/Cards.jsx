import React from "react"
import styled from "styled-components"

const ContentPanel = styled.div`
    content: "";
    display: inline-grid;
    padding: 5px;
    position: relative;
    width: 50%;
    height: 70%;
    left: 25%;
    background-color: #f5f5f5;
`

const ContentPanelRow = styled.div`
    width: 100%;
    display: block;
`

const PostSheet = styled.div`
   margin: 0.5%;
   padding: 0.5%;
   border: #4B0082 solid 1px;
   background-color: #FFF0F5;
   opacity: 1;
   float: left;
   height: 100px;
   width: 31%;
   transition: 0.6s ease-in-out;
   display: flex;
   justify-content: center;

   &:hover {
      scale: 1.10;
      transform: rotateY(180deg)
   }
`

const PostSheetTitle = styled.label`
    font-size: 0.9em;
    margin: auto;
    text-align: center;
`

const PostSheetImage = styled.img`
   margin: 0 auto;
   display: block;
   width: 70px;
   height: 100px;
`

function Cards({ zodiacs, setZodiacs }){
    let arr = []
    for(let idx=0; idx<=(zodiacs.length-3); idx+=3){
        const [ z1, z2, z3 ] = [ zodiacs[idx], zodiacs[idx+1], zodiacs[idx+2] ]
        arr.push(
            <ContentPanelRow>
                <PostSheet>
                    <PostSheetImage src={`${z1.sign}.png`} />
                    <PostSheetTitle>{z1.sign}</PostSheetTitle>
               </PostSheet>
                <PostSheet>
                   <PostSheetImage src={`${z2.sign}.png`} />
                   <PostSheetTitle>{z2.sign}</PostSheetTitle>
               </PostSheet>
               <PostSheet>
                   <PostSheetImage src={`${z3.sign}.png`} />
                   <PostSheetTitle>{z3.sign}</PostSheetTitle>
               </PostSheet>
           </ContentPanelRow>
        )
    }
    return (
        <ContentPanel> 
            {arr} 
        </ContentPanel>
    )
}

export default Cards
