import React from 'react'

function Info() {
  return (
    <div className="about__info grid">
        <div className="about__grid">
            < i class='bx bx-award about__icon'  ></i> 
            <h3 className="about__title">
                Experience
            </h3>
            <span className="about__subtitle">3+ years</span>
        </div>

         <div className="about__grid">
            < i class='bx bx-briefcase-alt about__icon'  ></i> 
            <h3 className="about__title">
                Completed
            </h3>
            <span className="about__subtitle">3 Industry projects</span>
            <br />
            <span className="about__subtitle">9 Academic projects</span>
        </div>

        {/*<div className="about__grid">
            < i class='bx bx-gear about__icon'></i> 
            <h3 className="about__title">
                Ongoing Projects
            </h3>
            <span className="about__subtitle">1 Project, Upgrading skills</span>
        </div>*/}

         <div className="about__grid">
            < i class='bx  bx-support about__icon'  ></i> 
            <h3 className="about__title">
                Support
            </h3>
            <span className="about__subtitle"> Online 24/7 </span>
        </div>
    </div>
  )
}

export default Info