import "./slider.css"
import styled from "styled-components"
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { SliderItems } from "../../data";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeft,faArrowRight} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    position: relative;
    overflow: hidden;
    margin-top: 0px;
`
const Arrow =styled.div`
    width: 50px;
    height: 50px;
    background-color: transparent;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=>props.direction==="left" && "10px"};
    right:${props=>props.direction==="right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    margin: auto;
    z-index: 2;

`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=>props.slideIndex*-100}vw);
    transition: all 1s ease;

`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`
const ImgContainer =styled.div`
    height: 100%; 
    flex: 1;
`

const Image =styled.img`
    height: 72%;
    width: 100%;
    object-fit: contain;
`


const Slider = () => {

  const check = useRef();
  const [slideIndex,setSlideIndex] =useState(0);
  
  useEffect(()=>{
      clearInterval(check.current)
           check.current=setInterval(()=>{
           setSlideIndex(slideIndex<4?slideIndex+1:0)
       },5000)
  },[slideIndex])

  const handleClick = (direction) =>{
      if(direction==="left"){
          setSlideIndex(slideIndex > 0 ? slideIndex-1:4)
      }
      else{
          setSlideIndex(slideIndex<4?slideIndex+1:0)
      }
  }

  return (
    <Container>
    <Arrow direction="left" onClick={()=>handleClick("left")}>
      <FontAwesomeIcon className="arrow" icon={faArrowLeft}></FontAwesomeIcon>
    </Arrow>
    <Wrapper slideIndex={slideIndex}>
        {SliderItems.map((items)=>(
            <Slide bg={items.bg} key={items.id}>
            <ImgContainer>
                <Image src={items.img}/>
            </ImgContainer>
            </Slide>
))}            
    </Wrapper>
    <Arrow direction="right" onClick={()=>handleClick("right")}>
      <FontAwesomeIcon className="arrow" icon={faArrowRight}></FontAwesomeIcon>
    </Arrow>
</Container>
  )
}

export default Slider