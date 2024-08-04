import React from 'react'
import style from './contact.module.css'

const Index = () => {
  return (
    <>
      <div className={`container ${style.contactUs}`}>
        <form action="">
          <div className={style.name}>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name' required />
          </div>
          <div className={style.email}>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' name='email' required />
          </div>
          <div className={style.message}>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="60" rows="10"></textarea>
          </div>
          <button className={`btn ${style.button}`} type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Index