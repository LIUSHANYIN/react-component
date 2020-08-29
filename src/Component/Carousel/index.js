import React, { useState, useEffect } from 'react';
import './index.scss';
export default function Carousel() {
  const [img, setImage] = useState([
    'https://res.cloudinary.com/dlapk94rx/image/upload/v1590187230/07_y3q46l.png',
    'https://res.cloudinary.com/dlapk94rx/image/upload/v1590187230/08_zrf7mw.png',
    'https://res.cloudinary.com/dlapk94rx/image/upload/v1590187228/11_t4tskt.jpg',
    'https://res.cloudinary.com/dlapk94rx/image/upload/v1590187228/05_kyftpg.jpg',
    'https://res.cloudinary.com/dlapk94rx/image/upload/v1590187225/03_iyjydo.jpg',
    'https://res.cloudinary.com/dlapk94rx/image/upload/v1590187224/04_peoydh.png',
    'https://res.cloudinary.com/dlapk94rx/image/upload/v1590187231/10_epizfp.jpg',
  ]);
  const [isMouse, setMouse] = useState(false);
  const handlePrev = () => {
    const temp = [...img];
    const cut = temp.splice(6, 1)[0];
    temp.unshift(cut);
    setImage(temp);
  };
  const handleNext = () => {
    const temp = [...img];
    const cut = temp.splice(0, 1)[0];
    temp.push(cut);
    setImage(temp);
  };
  useEffect(() => {
    let tick;
    if (!isMouse) {
      tick = setInterval(handleNext, 3000);
    }
    return () => clearInterval(tick);
  });
  return (
    <div
      className='Carousel'
      onMouseEnter={() => {
        setMouse(true);
      }}
      onMouseLeave={() => {
        setMouse(false);
      }}
    >
      <button onClick={handlePrev}>
        <img
          src='https://res.cloudinary.com/dlapk94rx/image/upload/v1598673705/ICONS/png/back_kxwwi5.png'
          alt=''
        />
      </button>

      <div className='Carousel-container'>
        {img &&
          img.map((v, i) => (
            <div key={i}>
              {i === 2 && <img className='img-left' src={v} alt={i} />}
              {i === 3 && <img className='img-mid' src={v} alt={i} />}
              {i === 4 && <img className='img-right' src={v} alt={i} />}
            </div>
          ))}
      </div>
      <button onClick={handleNext}>
        <img
          src='https://res.cloudinary.com/dlapk94rx/image/upload/v1598673703/ICONS/png/next-1_b2sraa.png'
          alt=''
        />
      </button>
    </div>
  );
}
