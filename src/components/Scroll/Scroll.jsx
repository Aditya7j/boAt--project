import React, { useEffect, useState } from 'react';
import "./Scroll.css"

const Scroll = () => {
const [visible,setVisible] =useState(false);

const togglevisible = ()=>{
    if(window.pageYOffset > 600){
        setVisible(true)
    }
    else{
        setVisible(false)
    }
}
const scrolltoTop = ()=>{
    window.scrollTo({
        top:0,
        behavior: 'smooth',
    })
}

useEffect(()=>{
    window.addEventListener("scroll",togglevisible);
    return ()=>{
        window.removeEventListener("scroll",togglevisible)
    }
},[])
  return (
    <div className='scroll-to-top'>
        {visible && (
            <div className='back-to-top' onClick={scrolltoTop}>
               <b className='backb'> <i  className='fas fa-arrow-up'></i></b>
            </div>
        )}
    </div>
  )
}

export default Scroll