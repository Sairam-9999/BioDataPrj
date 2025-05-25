import React from 'react'
import Works from './Works'
import './work.css'

function Work() {
  return (
    <section className="work setion" id="portfolio">
        <br /><br /><br />
        <h2 className="section__title">
            Portfolio
        </h2>
        <span className="section__subtitle">Most recent works..</span>
        <Works />
    </section>
  )
}

export default Work;