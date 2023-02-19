import React from 'react'
import "./Card.css"

const Card = ({desc, img, title}) => {
  return (
    <div className='cardContainer'>
        <h2> {title} </h2>
        <img className='cardImg' src={img} alt="img" />
        <p className='par'> {desc} </p>
    </div>
  )
}

export default Card