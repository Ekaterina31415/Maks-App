import React from 'react'
import avatar from '../img/avatar.jpg'

export default function Hero() {
  return (
    <div className='hero'>
      <div className='title'>
        <h3>nutricionist</h3>
        <h1>Maksim Akimov</h1>
      </div>
      <div className='icon'>
        <img src={avatar} alt='' />
      </div>
    </div>
  )
}
