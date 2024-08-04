import React from 'react'
import style from './service.module.css'
import Card from '../../common/Card/Card'

const index = () => {

  const data = [
    {
      category:"mobile",
      image:"../../../../public/Image/1.jpeg",
      description:"Nokia/3310",
      price:"9999"
    },
    {
      category:"mobile",
      image:"../../../../public/Image/2.jpeg",
      description:"Nokia/3310",
      price:"9999"
    },
    {
      category:"mobile",
      image:"../../../../public/Image/3.jpeg",
      description:"Nokia/3310",
      price:"9999"
    },
    {
      category:"mobile",
      image:"../../../../public/Image/4.jpeg",
      description:"Nokia/3310",
      price:"9999"
    },
    {
      category:"laptop",
      image:"../../../../public/Image/laptop-1.jpeg",
      description:"Dell/3310",
      price:"20000"
    },
    {
      category:"laptop",
      image:"../../../../public/Image/laptop-2.jpeg",
      description:"Dell/3310",
      price:"20000"
    },
    {
      category:"laptop",
      image:"../../../../public/Image/laptop-3.jpeg",
      description:"Dell/3310",
      price:"20000"
    },
    {
      category:"laptop",
      image:"../../../../public/Image/laptop-2.jpeg",
      description:"Dell/3310",
      price:"20000"
    },
    {
      category:"laptop",
      image:"../../../../public/Image/laptop-5.jpeg",
      description:"Dell/3310",
      price:"20000"
    },
    {
      category:"mobile",
      image:"../../../../public/Image/1.jpeg",
      description:"Nokia/3310",
      price:"9999"
    },
    {
      category:"mobile",
      image:"../../../../public/Image/2.jpeg",
      description:"Nokia/3310",
      price:"9999"
    },
    {
      category:"mobile",
      image:"../../../../public/Image/3.jpeg",
      description:"Nokia/3310",
      price:"9999"
    },
    {
      category:"mobile",
      image:"../../../../public/Image/4.jpeg",
      description:"Nokia/3310",
      price:"9999"
    },
    {
      category:"laptop",
      image:"../../../../public/Image/laptop-1.jpeg",
      description:"Dell/3310",
      price:"20000"
    },
    {
      category:"laptop",
      image:"../../../../public/Image/laptop-2.jpeg",
      description:"Dell/3310",
      price:"20000"
    },
    {
      category:"laptop",
      image:"../../../../public/Image/laptop-3.jpeg",
      description:"Dell/3310",
      price:"20000"
    },
    {
      category:"laptop",
      image:"../../../../public/Image/laptop-2.jpeg",
      description:"Dell/3310",
      price:"20000"
    },
    {
      category:"laptop",
      image:"../../../../public/Image/laptop-5.jpeg",
      description:"Dell/3310",
      price:"20000"
    },
  ]

  return (
    <>
    <div className={`container ${style.service}`}>
      <Card data={data}/>
    </div>
    </>
  )
}

export default index