import React, {useState} from 'react'
import './services.css'

function Services() {

  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What's the best I bring</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Fronted <br /> Developer</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
            
                <div className={toggleState===2 ? "services__model active-model" : "services__model"}>
                    <div className="services__model-content">
                        <i className="uil uil-times services__model-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__model-title">Frontend Developer</h3>
                        <p className="services__model-description">I'm into this domain for more than 5 years. Both Support and Developement.</p>

                        <ul className="services__model-services grid">
                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">I develope the friendly UI.</p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">Techniques to improve website loading speed.</p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">I create UX elements interactions.</p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">Core technologies for building the structure, and style.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Backend <br /> Developer</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
            
                <div className={toggleState===1 ? "services__model active-model" : "services__model"}>
                    <div className="services__model-content">
                        <i className="uil uil-times services__model-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__model-title">Backend Developer</h3>
                        <p className="services__model-description">I'm into this domain for more than 5 years. Both Support and Developement.</p>

                        <ul className="services__model-services grid">
                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">Familiar with design patterns.</p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info"> Spring Boot for development process.</p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">Design and implement RESTful APIs.</p>
                            </li>

                            <li className="services__model-service">
                                <i className="uil uil-check-circle services__model-icon"></i>
                                <p className="services__model-info">Knowledge of SQL.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services;