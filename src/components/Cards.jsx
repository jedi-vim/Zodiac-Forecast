import React, { useState } from "react"
import styled from "styled-components"

const ContentPanel = styled.div`
    content: "";
    padding: 5px;
    position: relative;
    width: 50%;
    height: 70%;
    left: 25%;
`

const ContentPanelRow = styled.div`
    width: 100%;
    display: block flex;
    margin: 10px;
    justify-content: space-between;
`

const PostSheet = styled.div`
   margin: 2px;
   padding: 2px;
   height: 100px;
   width: 31%;
   border: 0.5px solid black;
   box-shadow: 5px 5px black;
   justify-content: center;
   transition: transform 1s;
   transform-style: preserve-3d;
   perspective: 1000px;
   cursor: pointer;

   ${(props)=> props.isFlipped && `transform: rotateY(180deg);`}
`

const PostSheetFace = styled.div`
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
`

const PostSheetFront = styled(PostSheetFace)`
   background-color: #F5F5F5;
   transform: rotateY(0deg);
`

const PostSheetBack = styled(PostSheetFace)`
   background-color: #FDF5E6;
   align-text: center;
   overflow: scroll;
   transform: rotateY(180deg);
`

const PostSheetTitle = styled.label`
    font-size: 0.9em;
    margin: 0 auto;
    text-align: center;
`

const PostSheetImage = styled.img`
   width: 70px;
   height: 100px;
   margin: 0 auto;
   float: left;
   -webkit-backface-visibility: hidden;
   backface-visibility: hidden;
`

const FlipCard = ({signData})=>{

    const [flipped, setFlipped] = React.useState(false)

    return(
        <PostSheet isFlipped={flipped} >
            <PostSheetFront onClick={()=>setFlipped((flipped)=>!flipped)}>
                <PostSheetImage src={`${signData.sign}.png`} />
                <PostSheetTitle>{signData.sign}</PostSheetTitle>
            </PostSheetFront>
            <PostSheetBack onClick={()=>setFlipped((flipped)=>!flipped)}>
               {signData.forecast || "Oremos, sem previsao"}
            </PostSheetBack>
       </PostSheet>
    )
}

function Cards({ zodiacs, setZodiacs }){
    let arr = []
    for(let idx=0; idx<=(zodiacs.length-3); idx+=3){
        const [ z1, z2, z3 ] = [ zodiacs[idx], zodiacs[idx+1], zodiacs[idx+2] ]
        arr.push(
            <ContentPanelRow>
                <FlipCard signData={z1} />
                <FlipCard signData={z2} />
                <FlipCard signData={z3} />
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
