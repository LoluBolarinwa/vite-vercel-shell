import React from "react";

function Section2() {
  return (
    <div className="about">
      <a href="#" id="About"></a>

      <div className="about-me-div">
        <h2 className="about-me">
          About <span className="me">Me.</span>
          <span className="me-underline"></span>
        </h2>

        <p className="about-text">
          <p>
            Hi, my name is Lolu. Welcome to my Portfolio! <br></br>I build
            frontend applications using HTML, CSS, JAVASCRIPT and REACT.
            <br></br>
            While the underlaying blockchain architecture is built using
            SOLDITY, ETHERS.js and HARDHAT. With an emphasis on building smart
            contracts for Layer2 Scaling solutions and Rollups.
          </p>
          <p>
            {/* My journey into web3 began late winter of 2017 when I ventured into
            bitcoin purchase and forgot about it. Remembered about it in 2021
            and converted it to fiat. This opened my eyes to the potential of */}
            My Journey into web3 began after graduation from the university and 
            stumbling on the possibility that blockchain provides to the each individual.
            It is a system that embodies the freedom of the human spirit and its ability to
            overcome difficulty and excel in the presence of adversity.
            Bitcoin as a store of value has the capacity to transform the financial
            sector, and the security infrastructure responsible for it made me curious. 
            So I researched about the type of internet architecture that kept it secure and running, 
            and found Blockchain in the middle of it all. This led me down the web3 rabbit
            hole.
          </p>
          <p>
            Over the past year, I have taken the traditional route of learning
            web2 technology stack intensively before diving into web3, so as to
            lay a solid foundation for the structure of knowledge I will
            subsequently acquire about this evergrowing space.
          </p>
        </p>
      </div>
    </div>
  );
}

export default Section2;
