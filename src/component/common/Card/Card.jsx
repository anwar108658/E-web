import React from 'react'
import style from './Card.module.css'

const Card = ({data}) => {
  return (
    <>
    {data.map((item) => (
        <div className={style.card}>
            <img className={style.CardImage} src={item.image} alt="" />
            <p className={style.CardPrice}>{`Rs: ${item.price}`}</p>
            <p className={style.CardDescription}>{item.description}</p>
        </div>
    ))}

    {/* {data.map((item) => {
        console.log(item,item.description)
    })} */}
    </>
  )
}

export default Card