import React, {useState} from 'react'
import './timeline.css'

function Timeline() {

  const [toggleState, setToggleState] = useState(1);
  
  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="timeline section">
        <h2 className="section__title">Timeline</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="timeline__container container">
            <div className="timeline__tabs">
                <div className={toggleState ===1 ? "timeline__button timeline__active button--flex" : "timeline__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap timeline__icon"></i>
                    Education
                </div>

                <div className={toggleState ===2 ? "timeline__button timeline__active button--flex" : "timeline__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt timeline__icon"></i>
                    Experience
                </div>
            </div>
            <div className="timeline__sections">
                <div className={toggleState === 1 ? "timeline__content timeline__content-active" : "timeline__content"}>
                    <div className="timeline__data">
                        <div>
                            <h3 className="timeline__title">Computer Science</h3>
                            <span className="timeline__subtitle">UMKC</span>
                            <div className="timeline__calender">
                                <i className="uil uil-calendar-alt"></i>&nbsp;
                                Aug 2023-Dec 2024
                            </div>
                        </div>

                        <div>
                            <span className="timeline__rounder"></span>
                            <span className="timeline__line"></span>
                        </div>
                    </div>

                    <div className="timeline__data">
                        <div></div>
                        <div>
                            <span className="timeline__rounder"></span>
                            <span className="timeline__line"></span>
                        </div>
                        <div>
                            <h3 className="timeline__title">Computer Science</h3>
                            <span className="timeline__subtitle">SRM University</span>
                            <div className="timeline__calender">
                                <i className="uil uil-calendar-alt"></i>&nbsp;
                                Jul 2017-May 2021
                            </div>
                        </div>

                        
                    </div>

                    <div className="timeline__data">
                        <div>
                            <h3 className="timeline__title">MPC</h3>
                            <span className="timeline__subtitle">Narayana jr. college</span>
                            <div className="timeline__calender">
                                <i className="uil uil-calendar-alt"></i>&nbsp;
                                Jun 2015-May 2017
                            </div>
                        </div>

                        <div>
                            <span className="timeline__rounder"></span>
                            <span className="timeline__line"></span>
                        </div>
                    </div>
                </div>

                 <div className={toggleState === 2 ? "timeline__content timeline__content-active" : "timeline__content"}>
                    <div className="timeline__data">
                        <div>
                            <h3 className="timeline__title">Software Engineer</h3>
                            <span className="timeline__subtitle">Aldi</span>
                            <div className="timeline__calender">
                                <i className="uil uil-calendar-alt"></i>&nbsp;
                                Jan 2025-Present
                            </div>
                        </div>

                        <div>
                            <span className="timeline__rounder"></span>
                            <span className="timeline__line"></span>
                        </div>
                    </div>

                    <div className="timeline__data">
                        <div></div>
                        <div>
                            <span className="timeline__rounder"></span>
                            <span className="timeline__line"></span>
                        </div>
                        <div>
                            <h3 className="timeline__title">Graduate Software Engineer</h3>
                            <span className="timeline__subtitle">UMKC</span>
                            <div className="timeline__calender">
                                <i className="uil uil-calendar-alt"></i>&nbsp;
                                Jan 2024-Dec 2024
                            </div>
                        </div>

                        
                    </div>

                    <div className="timeline__data">
                        <div>
                            <h3 className="timeline__title">Digita Specialist Engineer</h3>
                            <span className="timeline__subtitle">Infosys</span>
                            <div className="timeline__calender">
                                <i className="uil uil-calendar-alt"></i>&nbsp;
                                Sept 2021-Aug 2023
                            </div>
                        </div>

                        <div>
                            <span className="timeline__rounder"></span>
                            <span className="timeline__line"></span>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Timeline