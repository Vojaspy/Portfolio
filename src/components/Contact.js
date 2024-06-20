import { CCircle,Linkedin,Github,Instagram,TelephoneFill,Envelope, Download} from "react-bootstrap-icons";
import Resume from '../assets/VojasGonnadeResume.pdf';


const sectionStyles = {
  paddingTop: "125px",
  paddingLeft: "25px",
  paddingRight: "25px",
  // backgroundColor: "#e6e6e6",
  paddingBottom : '25px',
  // backgroundColor : '#f0f6f6',
};

const headingStyles = {
  color: "teal",
};

const outerStyles = {
  width: "100%",
  maxWidth: "900px",
  height: "auto",
  margin: "50px auto 100px",
  border: "3px solid black",
  borderRadius: "30px",
  padding: "15px 20px",
};

const subHeadingStyles = {
  fontSize: "20px",
  color: "brown",
};

const responsiveStyles = `
  @media (max-width: 768px) {
    .outer-styles {
      width: 80%;
      padding: 10px;
    }
  }
  @media (max-width: 480px) {
    .outer-styles {
      width: 90%;
      padding: 5px;
    }
  }
`;

const liStyles = {
    margin:'0px 35px',
    listStyleType:'none',
    fontSize:'25px',
};

const Contact = () => {
  return (
    <section id="contact" style={sectionStyles}>
        <style>{responsiveStyles}</style>
      <h1 style={headingStyles}>Contact</h1>
      <div className="container-fluid">
        <div className="d-flex justify-content-center">
          <div className="outer-styles" style={outerStyles}>
            <form netlify name="contact">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  <span style={subHeadingStyles}>Email address</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="examplename" className="form-label">
                  <span style={subHeadingStyles}>Name</span>
                </label>
                <input type="text" className="form-control" id="examplename" required/>
              </div>
              <div>
                <label htmlFor="exampleMessage" className="form-label">
                  <span style={subHeadingStyles}>Message</span>
                </label>
                <textarea
                  className="form-control"
                  id="exampleMessage"
                  required
                />
              </div>
              <div
                className="d-flex justify-content-around"
                style={{ margin: "20px 0px" }}
              >
                <button
                  type="submit"
                  className="btn "
                  style={{ color: 'white' , backgroundColor:'teal'}}
                >
                  Submit
                </button>
                {/* <a href={Resume} download style={{color:'black' ,textDecoration:'none',fontSize:'20px'}}>Download my resume here <Download/></a> */}

              </div>
            </form>
          </div>
        </div>

        {/* <div className="d-flex justify-content-center" style={{marginBottom:'20px'}}>
          <a href={Resume} download style={{color:'black' ,textDecoration:'none',fontSize:'20px'}}>Download my resume here <Download/></a>
        </div> */}
        
        <div>
            <h4>Alternatively you can contact me on: </h4>
            <ul className="d-flex justify-content-start flex-wrap" >
                <li style={liStyles}>
                    <a href="https://www.linkedin.com/in/vojas-gonnade-57523522a/" target="_blank" style={{color:'black'}} data-bs-toggle="tooltip" data-bs-placement="top" title="LinkedIn"><Linkedin/></a>
                </li>
                <li style={liStyles}>
                    <a href="https://github.com/Vojaspy" target="_blank" style={{color:'black'}} data-bs-toggle="tooltip" data-bs-placement="top" title="GitHub"><Github/></a>
                </li>
                <li style={liStyles}>
                    <a href="mailto:vojasgonnade07@gmail.com" target="_blank" style={{color:'black'}} data-bs-toggle="tooltip" data-bs-placement="top" title="Mail"><Envelope/></a>
                </li>
                <li style={liStyles}>
                    <a href="https://www.instagram.com/vojas.gonnade" target="_blank" style={{color:'black'}} data-bs-toggle="tooltip" data-bs-placement="top" title="Instagram"><Instagram/></a>
                </li>
                <li style={liStyles}>
                    <TelephoneFill/> <span style={{fontSize:'20px'}}>+91 7219884731</span>
                </li>
            </ul>
        </div>
      </div>
      <footer className="d-flex justify-content-center" style={{marginTop:'40px', fontSize:'20px'}}>
        <div>
          <CCircle /> Vojas Gonnade, Inc. All Rights Reserved.
        </div>
      </footer>
    </section>
  );
};

export default Contact;
