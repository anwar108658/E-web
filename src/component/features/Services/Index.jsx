import React from 'react'
import style from './service.module.css'
import Card from '../../common/Card/Card'
import image from '../../../Image/1.jpeg'
import image2 from '../../../Image/laptop-1.jpeg'

const index = () => {

  const data = [
    {
      category:"mobile",
      image: image,
      description:"Nokia/3310",
      price:"9999"
    },
    {
      category:"laptop",
      image: image2,
      description:"Dell/3310",
      price:"9999"
    },
    {
      category:"mobile",
      image: image,
      description:"Nokia/3310",
      price:"9999"
    },
    {
      category:"laptop",
      image: image2,
      description:"Dell/3310",
      price:"9999"
    },
    {
      category:"mobile",
      image: image,
      description:"Nokia/3310",
      price:"9999"
    },
    {
      category:"laptop",
      image: image2,
      description:"Dell/3310",
      price:"9999"
    },
    {
      category:"mobile",
      image: image,
      description:"Nokia/3310",
      price:"9999"
    },
    {
      category:"laptop",
      image: image2,
      description:"Dell/3310",
      price:"9999"
    },
    {
      category:"mobile",
      image: image,
      description:"Nokia/3310",
      price:"9999"
    },
    {
      category:"laptop",
      image: image2,
      description:"Dell/3310",
      price:"9999"
    },
    {
      category:"mobile",
      image: image,
      description:"Nokia/3310",
      price:"9999"
    },
    {
      category:"laptop",
      image: image2,
      description:"Dell/3310",
      price:"9999"
    },
    {
      category:"mobile",
      image: image,
      description:"Nokia/3310",
      price:"9999"
    },
    {
      category:"laptop",
      image: image2,
      description:"Dell/3310",
      price:"9999"
    },
    {
      category:"mobile",
      image: image,
      description:"Nokia/3310",
      price:"9999"
    },
    {
      category:"laptop",
      image: image2,
      description:"Dell/3310",
      price:"9999"
    },
    {
      category:"mobile",
      image: image,
      description:"Nokia/3310",
      price:"9999"
    },
    {
      category:"laptop",
      image: image2,
      description:"Dell/3310",
      price:"9999"
    },
    {
      category:"mobile",
      image: image,
      description:"Nokia/3310",
      price:"9999"
    },
    {
      category:"laptop",
      image: image2,
      description:"Dell/3310",
      price:"9999"
    },
    {
      category:"mobile",
      image: image,
      description:"Nokia/3310",
      price:"9999"
    },
    {
      category:"laptop",
      image: image2,
      description:"Dell/3310",
      price:"9999"
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