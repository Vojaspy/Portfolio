import { ReactTyped } from "react-typed";
import backImage from "../assets/back2.jpg";
import Tableau from '../assets/Tableau.png';
import PowerBI from '../assets/powerBI.png';

const sectionStyles = {
  paddingTop: "125px",
  paddingLeft: "25px",
  paddingRight: "25px",
  backgroundColor: "#f0f6f6",
};

const headingStyles = {
  color: "teal",
};

const subHeadingStyles = {
  color: "#da7171",
};

const imgContainerStyles = {
  display: "flex",
  justifyContent: "center", // Center align the images horizontally
  flexWrap: "wrap", // Allow images to wrap to the next line on smaller screens
};

const imgStyles = {
  maxHeight: "100px",
  margin: "15px", // Add space between images
};

const Skills = () => {
  return (
    <section id="skills" style={sectionStyles}>
      <h1 style={headingStyles}>Skills</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 style={subHeadingStyles}>Programming Languages</h1>
            <div style={imgContainerStyles}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
                className="img-fluid"
                style={imgStyles}
                alt="C Language"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                className="img-fluid"
                style={imgStyles}
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                className="img-fluid"
                style={imgStyles}
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
                className="img-fluid"
                style={imgStyles}
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
                className="img-fluid"
                style={imgStyles}
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                className="img-fluid"
                style={imgStyles}
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
                className="img-fluid"
                style={imgStyles}
              />
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <h1 style={subHeadingStyles}>Technologies</h1>
            {/* Add more technologies as needed */}
            <div style={imgContainerStyles}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                className="img-fluid"
                style={imgStyles}
              />
              
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" className="img-fluid" style={imgStyles}/>
    
            
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original-wordmark.svg" className="img-fluid" style={imgStyles}/>
            
            {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" className="img-fluid" style={imgStyles}/> */}
          
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg" className="img-fluid" style={imgStyles}/>
          
          
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" className="img-fluid" style={imgStyles}/>
          
            {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" className="img-fluid" style={imgStyles}/> */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original-wordmark.svg" className="img-fluid" style={imgStyles}/>
            
            
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original-wordmark.svg" className="img-fluid" style={imgStyles}/>
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original-wordmark.svg" className="img-fluid" style={imgStyles} />
          
            
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" className="img-fluid" style={imgStyles}/>
          
          
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <h1 style={subHeadingStyles}>Tools</h1>
            {/* Add more technologies as needed */}
            <div style={imgContainerStyles}>
                
            {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/minitab/minitab-original.svg" className="img-fluid" style={imgStyles}/> */}
          
          
            <img src={PowerBI} className="img-fluid"style={imgStyles}></img>
            <img src={Tableau} className="img-fluid"style={imgStyles}></img>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" className="img-fluid" style={imgStyles}/>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
