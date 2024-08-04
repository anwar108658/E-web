import React from 'react'
import style from './about.module.css'
import image from '../../../../public/Image/b.jpg'
import image1 from '../../../../public/Image/smart-pic.jpg'

const Index = () => {
  return (
    <>
    <section className={style.sectionBackground}>
      <div className={`container ${style.aboutUs}`}>
        <h1>About Us</h1>
        <ul><img src={image} alt="" />
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, minus.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quis labore deserunt, itaque, modi minima ipsum earum officiis nemo quibusdam iure quidem omnis ea exercitationem eos quo aspernatur reprehenderit ducimus.</li>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae hic porro dolorem nobis maiores quisquam quaerat consequatur distinctio corporis impedit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis!</li>
        </ul>
        <ul><img src={image1} alt="" />
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, minus.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quis labore deserunt, itaque, modi minima ipsum earum officiis nemo quibusdam iure quidem omnis ea exercitationem eos quo aspernatur reprehenderit ducimus.</li>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae hic porro dolorem nobis maiores quisquam quaerat consequatur distinctio corporis impedit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis!</li>
        </ul>
      </div>
    </section>
      
    </>
  )
}

export default Index