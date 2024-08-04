import React from 'react'
import style from './HeroSection.module.css';
import image from '../../../../public/Image/c.jpg'

const HeroSection = () => {
  return (
    <>
    <section className={style.backGroundImage}>
        <div className={`${style.parentHeroSection} container`}>
          <div className={style.leftHeroSection}>
            <p className={style.firstLeft}>In This Application</p>
            <h1 className={style.secondLeft}>Whatever You Want</h1>
            <p className={style.thirdLeft}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam distinctio similique quidem pariatur aspernatur ipsum consectetur ratione sint quod possimus at dolores hic, laboriosam eligendi accusantium. Delectus itaque beatae perspiciatis.</p>
            <button className={`${style.button} btn`}>Contact</button>
          </div>
          <div className={style.rightHeroSection}>
            <img src={image} alt="this is a image" />
          </div>
        </div>
    </section>      
    </>
  )
}

export default HeroSection