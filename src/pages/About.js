import React from 'react';


const About = () => {
  return (
    <>
      <div className='wrapper'>
        <div className='about-header'>
          <h2>Hi, I'm Caleb! I'm an apsiring software developer!</h2>
        </div>

        <div className='about-body'>
          <p>
            I'm currently persuing to start my career in software development, and have created this personal website to showcase 
            my current technical ability while continuing to add to it. 
          </p>

          <p>
            I have been infatuated with web development since I was roughly 15-16, but didn't have the opportunity in school to 
            learn without the need for self-learning. 
          </p>

          <p>
            I have studied and graduated with a Diploma of Information Technology from CoderAcademy, a bootcamp 
            offered by the Academy of Information Technology, so I could become qualified and more confident in my technical ability. 
            I also hold a Diploma of Information Technology Networking, provided by TAFE Brisbane, which I graduated in 2018.
          </p>

          <p>you can go back home <a href="/">here</a></p>
        </div>
      </div>
    </>
  )
};

export default About;