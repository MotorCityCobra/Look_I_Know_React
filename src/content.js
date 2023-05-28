import React from 'react';
import image1 from './images/Stratamos.png';
import image2 from './images/CMPO.png';
import image3 from './images/JJMobility.png';

const MyContent = () => {
  return (
    <div className="container">
      <div className="image-box">
        <img src={image1} alt="GPU Cloud Computing Service" href="https://stratamos.com"/>
        <p>Full stack site I built from scratch with MERN to sell time on VMs with GPUs for ML.</p>
      </div>
      <div className="image-box">
        <img src={image2} alt="The MPO Algorithm Written in C++" href="https://github.com/MotorCityCobra/C_plusplus_mpo/blob/main/mpo.cpp"/>
        <p>Implementation of the MPO (RL) algorithm in C++. Most of the challenge was rewriting parts of the Pytorch library in C++.</p>
      </div>
      <div className="image-box">
        <img src={image3} alt="A front end site" href="https://jjmobility.net"/>
        <p>Front-end React site I made for a local business with about 100 pages.</p>
      </div>
    </div>
  );
}

export default MyContent;
