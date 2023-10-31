function Projects() {
  return (
    <div id="project-back">
      <div id="proj-cont">
        <a href="#" id="Portfolio"></a>
        <div className="project-parentDiv">
          <div className="project-1">
            <a className="img-1 img-p" href="https://lolubolarinwa.github.io/dashboard-react" target="_blank"/>

            <div className="project-description">
              <h3>React Dashboard</h3>
              {/* <p>A Dashboard built using React Components, Material UI and </p> */}
              <p>Empowering data-driven decisions, my project leverages REACT, APIs, 
                and Material UI for seamless user experience and stunning data visualization.</p>
            </div>
          </div>

          <div className="project-1">
            <a className="img-2 img-p " href="https://lolubolarinwa.github.io/weather-app-project-/" target="_blank"/>
            <div className="project-description">
              <h3>API Forecaster Weather </h3>
              <p>
              Using JavaScript, CSS, and Node.js. I created a dynamic web app with 
              robust API integration, emphasizing efficient HTTP requests and data retrieval.
              </p>
            </div>
          </div>

          <div className="project-1">
            <a className="img-3 img-p " href="https://lolubolarinwa.hashnode.dev/understanding-blockchain-consensus-mechanisms" target="_blank"/>
            <div className="project-description">
              <h3>Consensu Algorithms</h3>
              <p>
              My article delves into pivotal consensus mechanisms highlighting 
              Ethereum's Proof of Work and Proof of Stake. This showcases my 
              expertise in blockchain technology and technical communication skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
