import React from 'react';

const MyContent = () => {
  return (
    <div className="container">
      <div className="image-box">
        <img src="./Images/Stratamos.png" alt="GPU Cloud Computing Service" href="stratamos.com"/>
        <p>Full stack site I built from scratch with MERN to sell time on VMs with GPUs for ML.</p>
      </div>
      <div className="image-box">
        <img src="CMPO.png" alt="The MPO Algorithm Written in C++" href="https://github.com/MotorCityCobra/C_plusplus_mpo/blob/main/mpo.cpp"/>
        <p>I implemented the RL, MPO algorithm in C++. I ended up writing a few things in C++ that Pytorch only had for Python.</p>
      </div>
      <div className="image-box">
        <img src="JJMobility.png" alt="A front end site" href="jjmobility.net"/>
        <p>Front-end React site with about 100 pages.</p>
      </div>
    </div>
  );
}

export default MyContent;
