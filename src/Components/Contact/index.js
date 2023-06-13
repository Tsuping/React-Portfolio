

import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimationLetters'
import './index.scss'


const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    const form = useRef()

    useEffect(() => {
        const effect = setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 3000)
        return () => clearTimeout(effect)
      })

      const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('gmail', 'template_t72jkbi', form.current, '6VXulgxVqcqwtwJYZ')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(true)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }


    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','O','N','T','A','C','T',' ','M','E']}
                    idx={15}
                    />
                </h1>
                <p>
                I have a strong interest in roles as a software developer or data scientist. If you have any open positions or would like to discuss further, please feel free to contact me using the form below. I am excited to contribute my skills and knowledge to innovative projects and make a valuable impact.
                </p>
                <p>
                if you have any other requests or
            questions, don't hesitate to contact me using below form or call me at +1 (213)-458-1103.
                </p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                    <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
                    </form>
                </div>
            </div>
            <div className="info-map">
            Tsu-Ping, Kuang (Steven),
            <br />
            US,
            <br />
            1265 W 37th Pl, Los Angeles <br />
            <br />
            <span>Email: steven8748@gmail.com</span>
            <span>Cellphone: +1 (213)-458-1103</span>
            </div>
        </div>
        <Loader type='ball-rotate' />
        </>
    )
}


export default Contact