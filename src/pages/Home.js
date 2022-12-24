import React from 'react';
import Image from 'react-bootstrap/Image';

const Home = () => {
  return (
    <>
      <div className='wrapper'>
        <div className='home-header'>
          <h2>caleb bonfield</h2>
        </div>

        <div className='home-profile'>
          <Image src='https://via.placeholder.com/150' roundedCircle></Image> { /* for later */ }
        </div>

        <div className='home-profile-caption'>
          <p>brisbane based software developer &#128512;</p>
        </div>

        <div className='home-body'>
          <p>placeholder text. lorem ipsum and such.</p>
        </div>

        <div className='links'>
          <ul>
            <li><a href="https://github.com/Antifact/">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/caleb-bonfield-b74035162/">LinkedIn</a></li>
            <li><a href="http://hicaleb.com/share/cv.pdf">Curriculum Vitae</a></li>
          </ul>
        </div>
      </div>
    </>
  )
};

export default Home;