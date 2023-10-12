import React from 'react';
import background from '../images/background.jpg';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className='main'>
      <div className='main-text'>
      <h1>Boost Your ROI with Smarter Landing Pages</h1>
      <p>High-converting landing page layouts, Instant copy generation. Up to 30% more conversations. Whenyou work with AI, you get the results you're looking for. (that means more leads.sales and signups.)</p>
      <button className='free-trial'>Start My Free 14-Day Trial</button> <br/> <br/>
      <Link to='/learn' className='learn-btn'>Learn More</Link> 
      
      
      </div>

      <div>
        <img className='main-img' src={background} alt='' />
      </div>
    </div>
  )
}

export default Main
