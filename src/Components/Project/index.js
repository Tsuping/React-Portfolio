import './index.scss'
import Loader from 'react-loaders';
import { useEffect, useState } from 'react'
import { faHtml5, faReact, faGitAlt, faPython, faJava, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimationLetters';

const projects = [
    { id: 1, name: 'Intelligent Chatbot', project_tool: 'Tools: Python, PyTorch', description: ['Developed a chatbot using PyTorch that integrates with a weather API, allowing users to obtain current weather information for a specified location',
     'Implemented natural language processing techniques to understand user commands and provide relevant weather data with weather APIs',
    'Conducted rigorous testing and validation of the chatbots performance, fine-tuning the model and improving its accuracy over time.',
     'Developed robust error handling and fallback mechanisms to gracefully handle user inputs that the chatbot could not understand or respond to.'] },
    { id: 2, name: 'Image Classification', project_tool: ' Tools: Python, TensorFlow', description: ['Utilized VGG16 and EfficientB0 models to accurately classify bird images into 20 distinct categories.',
     'Employed transfer learning techniques to leverage pre-trained models and achieve high classification accuracy.',
    'Implemented data augmentation techniques such as rotation, scaling, and flipping to enhance the training dataset and improve model generalization.',
     '•	Conducted extensive model evaluation and fine-tuning, adjusting hyperparameters and regularization techniques to optimize the performance of the image classification models.'] },
    { id: 3, name: 'Stock Price Prediction', project_tool: ' Tools: Python, TensorFlow', description: ['Utilized Sklearn techniques for comprehensive data preprocessing, including handling missing values, feature scaling, and data normalization. Generated a prediction model by leveraging Keras to forecast the next day stock closing price.',
    'Conducted extensive model evaluation and fine-tuning, employing techniques such as cross-validation, hyperparameter optimization, and regularization, to achieve high prediction accuracy and minimize overfitting.',
'Employed various neural network architectures, including recurrent neural networks (RNNs) or long short-term memory (LSTM) networks, to capture temporal dependencies and patterns in the stock price data.'] },
    // Add more projects as needed
    { id: 4, name: 'Blog Web Application', project_tool: 'Tools: Node.js, Vue, MongoDB', description: ['Employed RESTful API architecture principles to ensure standardized communication between the frontend and backend components of the application.',
    'Utilized Node.js as the backend framework to handle server-side logic and API endpoints for the blog web application.',
'Integrated MongoDB, a NoSQL database, to store and manage blog articles, enabling efficient retrieval and manipulation of data.',
'Implemented user authentication and authorization features, allowing registered users to create, edit, and delete their own articles while maintaining security and data privacy.'] },
    // Add more projects as needed
  ];


const Projects = () => {


    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        const effect = setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 3000)
        return () => clearTimeout(effect)
      })

      const objects = [
        { key: 'Machine Learning', value: 'Linear Regression, Logistic regression, Multinomial regression, Support Vector Machine, Neural Network, Decision tree, Unsupervised Learning, Active Learning, CNN' },
        { key: 'Software/Tools', value: 'Tableau, TensorFlow, PyTorch, GIT, Pandas, NumPy, Weka, Keras, Sklearn, MS Excel' },
        { key: 'Web Development', value: 'JavaScript, Bootstrap, PHP, CSS, HTML 5.0, Node.js, Vue, Ruby on rails' },
        { key: 'Programming Languages', value: 'Python, Java, SQL, R, C#, C++, JavaScript' },
        { key: 'Database Server', value: 'SQL Server, PostgreSQL, MongoDB' },
        { key: 'Game Development', value: 'Unity' }
      ];

    return (
        <>
        <div className='container project-page'>
            <div className='text-zone'>
                <div className='object-list'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                            strArray={['T','E','C','H','N','I','C','A','L']}
                            idx={15}
                        />
                    </h1>
                    <ul>
                    {objects.map((object, index) => (
                    <li key={index}>
                        {object.key}: {object.value}
                    </li>
                    ))}
                    </ul>
                </div>

                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                        strArray={['P','R','O','J','E','C','T','S']}
                        idx={15}
                    />
                </h1>
                <div className="project-list">
                <ul>
                {projects.map((project) => (
                <li key={project.id} className="project-item">
                    <h3 className="project-title">{project.name}</h3>
                    <h2 className="project-tool">{project.project_tool}</h2>
                    <ul className="project-description">
                    {project.description.map((point) => (
                        <li key={point}>{point}</li>
                    ))}
                    </ul>
                    <br/>
                    <br/>
                </li>
                ))}
            </ul>
                </div>
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


        </div>

            <Loader type='ball-rotate' />
        </>
    )
}

export default Projects