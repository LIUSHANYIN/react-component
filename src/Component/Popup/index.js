import React, {  useRef, useEffect } from 'react'
import './index.scss'
export default function Popup({handlePopupClose}) {
    const pop = useRef();
    const handleClosePopup = (e) =>{
        if(pop.current.contains(e.target)){
            return;
        }
        handlePopupClose();
    }
    useEffect(()=>{
        document.addEventListener('click',handleClosePopup);
        return ()=> document.removeEventListener('click',handleClosePopup);
    })
    return (
        <div ref={pop}>
            
             <div className='popup-container'>
                <h2>I am Popup</h2>
            </div>
            
        </div>  
       
    )
}
