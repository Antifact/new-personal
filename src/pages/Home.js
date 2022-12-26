import React from 'react';
import Image from 'react-bootstrap/Image';

const Home = () => {
  return (
    <>
      <div className='wrapper'>
        <div className='home-header'>
          <h2>Caleb Bonfield</h2>
        </div>

        <div className='home-profile'>
          <Image src='https://via.placeholder.com/150' roundedCircle></Image> { /* for later */ }
        </div>

        <div className='home-profile-caption'>
          <p>Brisbane based software developer &#128512;</p>
        </div>

        <div className='home-body'>
          <p>placeholder text. lorem ipsum and such.</p>

          <p>Read more about me <a href='/about'>here</a>!</p>
        </div>

        <div className='links'>
          <ul>

            <li><a className='gh' href="https://github.com/Antifact"><i class="fa-brands fa-github fa-xl"></i></a></li>
            <li><a className='lin' href="https://www.linkedin.com/in/caleb-bonfield-b74035162/"><i class="fa-brands fa-linkedin-in fa-xl"></i></a></li>
            <li><a className='cv' href="http://hicaleb.com/share/cv.pdf"><i class="fa-solid fa-file-pdf fa-xl"></i></a></li>
            {/* <li><a href="https://github.com/Antifact/">GitHub</a></li> */}
            {/* <li><a href="https://www.linkedin.com/in/caleb-bonfield-b74035162/">LinkedIn</a></li> */}
            {/* <li><a href="http://hicaleb.com/share/cv.pdf">Curriculum Vitae</a></li> */}
          </ul>
        </div>
      </div>
    </>
  )
};

export default Home;