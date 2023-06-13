
import AnimatedLetters from '../AnimationLetters';
import './index.scss';
import React from 'react';
import { useEffect, useState } from 'react'
import photo1 from '../../assets/images/picture1.png'
import photo2 from '../../assets/images/Tsuping_kuang.jpg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faReact, faGitAlt, faPython, faJava, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        const effect = setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 3000)
        return () => clearTimeout(effect)
      })

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                        strArray={['A','B','O','U','T',' ','M','E']}
                        idx={15}
                    />
                </h1>
                <p>
                I am a highly motivated and skilled computer scientist with a passion 
                for analyzing business requirements and developing innovative 
                solutions. Throughout my academic journey and professional experiences, 
                I have demonstrated exceptional proficiency in designing, developing, testing, debugging, and implementing applications and systems.
                My expertise in computer science fundamentals, including data structures and algorithms, 
                coupled with my ability to write well-tested and readable code, has allowed me to consistently drive the 
                improvement of software quality, customer experience, and product maintainability. 
                With strong communication, analytical, and leadership skills, I excel at collaborating 
                effectively with teams to propel business growth. Furthermore, 
                I am dedicated to continuously expanding my knowledge and expertise by staying abreast of new technologies and cutting-edge techniques.
                </p>
                <p>
                During my Master of Science in Computer Science program at the University of Southern California (USC) in Los Angeles from 2022 to 2023, I have been immersed in advanced concepts and techniques related to the design, programming, and application of digital computers. This program has equipped me with a comprehensive understanding of artificial intelligence, including machine learning, statistics, computer vision, natural language processing, and robotics. Through my coursework, I have developed strong skills in acquiring, storing, analyzing, and visualizing large, heterogeneous, and real-time data. Some of the notable course modules I have completed include Fundamental Artificial Intelligence, Machine Learning for Data Science, Analysis of Algorithm, Information Retrieval and Web Search Engine, Database Systems, and Supervised, Semi-Supervised, and Unsupervised Learning.

As a Python Engineer Intern at Taiwan Life Insurance Co. in Taipei in 2020, I contributed to the development of assistance programs aimed at analyzing the performance of a Natural Language Processing (NLP) model. In this role, I worked closely with the team to implement the project using Python, Pandas, and NumPy. I evaluated complex data and optimized the model's performance according to project requirements. Additionally, I verified tags in datasets to ensure operational efficiency. By collaborating with project managers and team members, I identified loopholes and successfully improved the NLP model's accuracy from 87% to 92%. Moreover, I leveraged data visualization techniques to generate reports that enhanced the team's understanding of model development, resulting in a 20% increase in productivity by identifying and reducing bottlenecks in the development process.

During my tenure as the Student Association Vice President at Brigham Young University in Hawaii from 2018 to 2019, I served as a major point of contact among the president and other association members, fostering enhanced team spirit and collaboration. I proactively sought and secured team sponsorships from corporate and local businesses, ensuring the success of various clubs and activities. Additionally, I closely monitored club activities and negotiated program specifications in collaboration with student leadership. Through the execution of effective plans, I played a pivotal role in achieving a remarkable 40% increase in revenue. Furthermore, I implemented strategic initiatives that resulted in a notable 10% surge in Taiwanese student enrollment at the university.

These experiences have not only enhanced my technical skills but also demonstrated my ability to excel in collaborative environments, lead teams, and achieve tangible results.
                </p>
                
                <p>
                Throughout my academic and professional journey, I have undertaken several key projects that demonstrate my technical expertise and problem-solving capabilities. These projects include:

In 2022, I developed an Intelligent Chatbot using Python and PyTorch. This chatbot integrated with a weather API, enabling users to obtain current weather information for a specified location. By implementing natural language processing techniques, the chatbot understood user commands and provided relevant weather data sourced from weather APIs.

Another project in 2022 involved Image Classification using Python and TensorFlow. I utilized VGG16 and EfficientB0 models to accurately classify bird images into 20 distinct categories. Leveraging transfer learning techniques, I harnessed pre-trained models to achieve high classification accuracy.

In the same year, I worked on Stock Price Prediction using Python and TensorFlow. Employing Sklearn techniques, I conducted comprehensive data preprocessing, including handling missing values, feature scaling, and data normalization. By leveraging Keras, I generated a prediction model to forecast the next day's stock closing price. Extensive model evaluation, fine-tuning, and techniques such as cross-validation, hyperparameter optimization, and regularization were employed to achieve high prediction accuracy while minimizing overfitting. Additionally, I explored various neural network architectures, such as recurrent neural networks (RNNs) or long short-term memory (LSTM) networks, to capture temporal dependencies and patterns in the stock price data.

In 2019, I developed a Blog Web Application using Node.js, Vue, and MongoDB. Employing RESTful API architecture principles, I ensured standardized communication between the frontend and backend components of the application. Node.js served as the backend framework, handling server-side logic and API endpoints. The integration of MongoDB, a NoSQL database, facilitated efficient retrieval and manipulation of blog articles. The implementation of user authentication and authorization features enabled registered users to create, edit, and delete their own articles while maintaining security and data privacy.

These projects reflect my ability to apply my technical skills in real-world scenarios, leveraging a variety of programming languages, frameworks, and tools to solve complex problems and deliver innovative solutions.
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className="face1">
                    <FontAwesomeIcon icon={faPython} color="#DD0031" />
                    </div>
                    <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                    <FontAwesomeIcon icon={faNodeJs} color="#28A4D9" />
                    </div>
                    <div className="face4">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                    <FontAwesomeIcon icon={faJava} color="#EFD81D" />
                    </div>
                    <div className="face6">
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>

            <div className="photos">
                <img src={photo1} alt='s' className="photo" />
                <img src={photo2} alt='s' className="photo" />
            </div>
        </div>
        <Loader type='ball-rotate' />
        </>
    )
}

export default About