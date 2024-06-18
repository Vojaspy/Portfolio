import {ReactTyped} from 'react-typed';
import backImage from '../assets/back2.jpg';
import {Linkedin,Github,Envelope,Download} from 'react-bootstrap-icons';
import Resume from '../assets/VojasGonnadeResume.pdf';

const sectionStyles = {
  paddingTop: "175px",
  paddingLeft: "25px",
  paddingRight: "25px",
  height : '100vh',
  backgroundColor :'black',
  backgroundImage: `url(${backImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const textStyles = {
    fontSize : '50px'
};

const typeStyles = {
    fontSize : '30px',
    marginTop : '25px',
    // display : 'block',
};

const connectLinks = {
  marginTop : '40px',
  fontSize : '35px',
  marginRight : 'auto',
  marginLeft : 'auto',
  width : '50%',
};

const aStyles = {
  textDecoration : 'none',
  fontSize : '20px',
  color : 'black',

}


const Home = () => {
  return (
    <section id="home" style={sectionStyles}>
      <div className="row">
        <div className ='' >
          <h1 style={textStyles} className='d-flex justify-content-center align-items-center'>Hello! I am Vojas Gonnade</h1>
          <h3 style={typeStyles} className='d-flex justify-content-center align-items-center'>
            I am a {""} 
            <ReactTyped
            className='mx-2'
              strings={["Web Developer", "Coder", "Designer","Tech Enthusiast", "Footballer."]}
              typeSpeed={100}
              backSpeed={50}
              loop
              showCursor={true}
            />
          </h3>
          <div className='d-flex justify-content-evenly align-items-center' style={connectLinks}>
          <a data-bs-toggle="tooltip" data-bs-placement="top" title="LinkedIn" href='https://www.linkedin.com/in/vojas-gonnade-57523522a/' target='_blank' style={{color:'black'}}>
               <Linkedin />
          </a>
          <a data-bs-toggle="tooltip" data-bs-placement="top" title="GitHub" href='https://github.com/Vojaspy' target='_blank' style={{color:'black'}}>
            <Github/>
          </a>
          <a data-bs-toggle="tooltip" data-bs-placement="top" title="Mail Me" href='mailto:vojasgonnade07@gmail.com' target='_blank' style={{color:'black'}}>
            <Envelope/>
          </a>
          <a data-bs-toggle="tooltip" data-bs-placement="top" title="Resume" href={Resume} target='_blank' style={aStyles} download >
            Download my resume here <Download />
          </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Home;
