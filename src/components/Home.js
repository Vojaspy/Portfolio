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
};

const textStyles = {
  fontSize: "50px",
  fontWeight: "bold",
  textAlign: "center",
};

const nameStyles = {
  color: "teal",
  display : 'inline',
};

const typeStyles = {
  fontSize: "30px",
  marginTop: "25px",
  textAlign: "center",
};

const aboutMeStyles = {
  marginTop: "3%",
  fontSize: "25px",
  textAlign: "center",
};

const bitStyles = {
  fontSize: "20px",
  marginTop: "15px",
  textAlign: "center",
  maxWidth: "800px",
  lineHeight: "1.5",
  paddingLeft: "10px",
  paddingRight: "10px",
};

const responsiveStyles = `
  @media (max-width: 768px) {
    .textStyles {
      font-size: 35px !important;
    }
    .typeStyles {
      font-size: 20px !important;
      margin-top: 15px !important;
    }
    .aboutMeStyles {
      font-size: 20px !important;
    }
    .bitStyles {
      font-size: 16px !important;
      margin-top: 10px !important;
      padding-left: 15px !important;
      padding-right: 15px !important;
    }
    .sectionStyles {
      padding-top: 100px !important;
      padding-left: 15px !important;
      padding-right: 15px !important;
    }
  }
`;

const Home = () => {
  return (
    <section id="home" style={sectionStyles}>
      <style>{responsiveStyles}</style>
      <div className="row">
        <div className="">
          <h1 style={textStyles} className="textStyles d-flex justify-content-center align-items-center">
            Hello! I am Vojas Gonnade
          </h1>
          
          <h3 style={typeStyles} className="typeStyles d-flex justify-content-center align-items-center">
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
          <div className="d-flex justify-content-center align-items-center aboutMeStyles" style={aboutMeStyles}>
            <span>
              A Bit About <span style={{ color: "teal" }}>Me</span>
            </span>
          </div>
          <div className="d-flex justify-content-center align-items-center mx-auto bitStyles" style={bitStyles}>
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
