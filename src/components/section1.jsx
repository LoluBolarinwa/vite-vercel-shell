import Navigation from "./navigation.jsx";
import Socials, { Socialmobile } from "./socials.jsx";
import /*Icon,*/ {ReactIcon, Solidity, Css, Git, Html, Javascript, Npm} from "./icons.jsx";
import Section2 from "./section2.jsx";
import Projects from "./projects.jsx";


function Section1() {
    return (
        <>
            <div className="first-div" ><a href="#" id="Home"></a>
                <Navigation />
                <div className="navdropDown">
                    <svg className="navbarsvg" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z"></path></g></svg>
                </div>

                <section className="section-1">
                    <Socials /> 

                    <div className="main row">
                        <div>
                        <p className="name-intro">Hi, my name is</p>
                        {/* <h1 className="name">Lolu Bolarinwa</h1> */}
                        <svg className="svg-name" viewBox="-150 0 1800 250" >
                        {/* <svg className="svg-name" viewBox="-50 0 1800 250" > */}
                        {/* // height="1em" width="1em"> */}
                            <text id="text-svg" x="35%" y="65%"  fill="transparent" textAnchor="middle">Lolu Bolarinwa</text>
                        </svg>
                        {/* <h3>I am a <span>FrontEnd Developer</span></h3> */}
                        <h1 className="job-title-intro">I am a&nbsp;
                            <span className="slides">
                                <span className="slides1">
                                    <span className="job-title"> Frontend Developer</span>
                                    <span className="job-title"> Web3 Developer</span>
                                    <span className="job-title"> Software Engineer</span>
                                    {/* <span className="job-title"> Blockchain Developer</span> */}
                                </span>
                            </span>
                        </h1>
                        {/* <p>Blockchain Developer</p> */}

                        </div>

                        <div className="description">
                        <p>
                        An innovative software engineer well versed in designing, building and deploying 
                        modern frontend and blockchain architecture.
                        Looking forward to working for an organization that aims to build next generation of 
                        decentralized financial products.
                        </p>
                        </div>
                        <div className="cv-btn">
                        <button className="cv-button">Cover Letter</button>
                        <button className="cv-button">Resume</button>
                        </div>
                    </div>

                </section>

                <section className="section-2">
   
                    <div className="skill-tools">
                        <div className="icons">
            
                        {/* <Icon className="icon" /> */}
                            <Html />
                            <Css />
                            <Javascript />
                            <ReactIcon />
                            <Git />
                            <Solidity />
                            <Npm />
                        </div>
                    </div>

                    <Section2 />

                    {/* </div> */}

                    
                </section>
                    <Socialmobile />

                    <Projects />
            </div>
        </>
        )
    }

export default Section1;