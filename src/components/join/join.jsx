import React, { useRef } from 'react'
import './join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_p1thtjx', 'template_ic680ap', form.current, '1jhYgF9hqKKNcfmC7')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="join" id="join">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>ready to</span>
                <span> level up</span>
            </div>
            <div>
                <span>your body</span>
                <span className='stroke-text'> with us?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name='user-email' placeholder='Enter your email address' />
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join
