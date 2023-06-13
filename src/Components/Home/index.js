import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimationLetters from '../AnimationLetters'
import Logo from './Logo'
import Loader from 'react-loaders';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['t','e','v','e','n',' ','K','u','a','n','g']
    const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r']
     
    
    useEffect(() => {
        const effect = setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 4000)
        return () => clearTimeout(effect)
      })
    
    return (
        <>
        
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                
                    <img src={LogoTitle}  alt=""developer/>
                    <AnimationLetters letterClass={letterClass}
                    strArray={nameArray} idx={15}/>
                    <br />
                    <AnimationLetters letterClass={letterClass}
                    strArray={jobArray} idx={26}/>
                </h1>
                <h2>Front-end Developer / JavaScript</h2>
                <Link to="/contact" className='flat-button'> CONTACT ME</Link>


            </div>
            <Logo />
        </div>
        <Loader type='ball-rotate' />
        </>
    )


}

export default Home