import { ReactTyped } from "react-typed";
import backImage from "../assets/back2.jpg";

const sectionStyles = {

  paddingTop: "175px",
  paddingLeft: "25px",
  paddingRight: "25px",
  height: "100vh",
  backgroundColor: "black",
  backgroundImage: `url(${backImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundAttachment: "fixed",

  '@media (max-width: 768px)': {
    paddingTop: "100px",
    paddingLeft: "15px",
    paddingRight: "15px",
  },
};

const textStyles = {
  fontSize: "50px",
  fontWeight: "bold",
};

const typeStyles = {
  fontSize: "30px",
  marginTop: "25px",
  // display : 'block',
};

const connectLinks = {
  marginTop: "40px",
  fontSize: "35px",
  // marginRight : 'auto',
  // marginLeft : 'auto',
  // width : '50%',
};

const aStyles = {
  textDecoration: "none",
  fontSize: "20px",
  color: "grey",
};

const aboutMeStyles = {
  marginTop: "3%",
};


const bitStyles = {
  fontSize: "20px",
  marginTop: "15px",
  textAlign: "center",
  maxWidth: "800px",
  lineHeight: "1.5",
};


const Home = () => {
  return (
    <section id="home" style={sectionStyles}>
      <div className="row">
        <div className="">
          <h1
            style={textStyles}
            className="d-flex justify-content-center align-items-center"
          >
            Hello! I am Vojas Gonnade
          </h1>
          
          <h3
            style={typeStyles}
            className="d-flex justify-content-center align-items-center"
          >
            I am a {""}
            <ReactTyped
              className="mx-2"
              style={{ color: "brown" }}
              strings={[
                "Web Developer",
                "Coder",
                "Designer",
                "Tech Enthusiast",
                "Footballer.",
              ]}
              typeSpeed={100}
              backSpeed={50}
              loop
              showCursor={true}
            />
          </h3>
          <div
            className="d-flex justify-content-center align-items-center"
            style={aboutMeStyles}
          >
            <span style={{ fontSize: "25px" }}>
              A Bit About <span style={{ color: "teal" }}>Me</span>
            </span>
          </div>
          <div className="d-flex justify-content-center align-items-center mx-auto" style={bitStyles}>
            Passionate web developer with a keen interest in competitive coding
            and data science. Proficient in front-end web technologies, I thrive
            in creating user-centric web experience. In addition to my web
            development skills I am a competitive coding and data science
            enthusiast, exploring data structures and algorithms and
            methodologies to extract meaningful information from the data.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
