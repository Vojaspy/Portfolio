import {ReactTyped} from 'react-typed';


const sectionStyles = {
  paddingTop: "175px",
  paddingLeft: "25px",
  paddingRight: "25px",
  height : '100vh',
  backgroundColor :'black'
};

const textStyles = {
    fontSize : '50px'
};

const typeStyles = {
    fontSize : '30px',
    // display : 'block',
};



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
          
        </div>
      </div>
    </section>
  );
};

export default Home;
