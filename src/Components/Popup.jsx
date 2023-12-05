import React from 'react'
import { TEAnimation } from "tw-elements-react"
const Popup = (props) => {
  return (props.trigger) ? (
    <section className=' w-full  mx-auto top-0 left-0  fixed  h-screen flex justify-center items-center'>
       <TEAnimation
        animation="[tada_1s_ease-in-out]"
        start="onLoad">
     <div className='p-4 w-full max-w-[400px] bg-opacity-75 rounded-lg'>
    {props.children}
     </div>
     </TEAnimation>
    </section>
  ) : null;
  
};

export default Popup;
