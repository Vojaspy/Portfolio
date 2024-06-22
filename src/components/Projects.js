import weather from "../assets/weather.jpg";
import teaLeaves from '../assets/teaLeaves.jpg';
import portfolioImage from '../assets/Portfolio.jpg';
import site from '../assets/Site.jpg';

const sectionStyles = {
  paddingTop: "125px",
  paddingLeft: "25px",
  paddingRight: "25px",
};

const headingStyles = {
  color: "teal",
};

const infoStyles = {
  fontSize: "20px",
};

const Projects = () => {
  return (
    <section id="projects" style={sectionStyles}>
      <h1 style={headingStyles}>Projects</h1>
      <h6>* Hover or click over cards to get more information about the projects</h6>
      <div className="container-fluid">
        <div className="row d-flex justify-content-around">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 p-2">
            <div className="card">
              <div className="card-img-container">
                <img src={weather} className="card-img-top" alt="Weather App" />
                <div style={{ padding: "20px" }}>
                  <h5 className="card-title">Weather APP</h5>
                  <div className="d-flex justify-content-evenly flex-wrap" style={{ marginTop: "20px" }}>
                    <button className="btn border rounded-4">HTML</button>
                    <button className="btn border rounded-4">CSS3</button>
                    <button className="btn border rounded-4">Bootstrap 5</button>
                    <button className="btn border rounded-4">JavaScript</button>
                  </div>
                </div>
                <div className="card-img-overlay">
                  <div className="overlay-content">
                    <p style={infoStyles}>
                      This Weather App provides real-time weather information for a given location. It fetches data from a reliable weather API and presents it in a user-friendly interface. Users can quickly check the current weather conditions, temperature, wind speed, visibility, and pressure for any desired location.
                    </p>
                    <a href="https://github.com/Vojaspy/Project1---Weather-APP" className="btn btn-primary" target="_blank" style={{ marginTop: "20px" }}>
                      To Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-4 p-2">
            <div className="card">
              <div className="card-img-container">
                <img src={portfolioImage} className="card-img-top" alt="Portfolio" />
                <div style={{ padding: "20px" }}>
                  <h5 className="card-title">This Portfolio</h5>
                  <div className="d-flex justify-content-evenly flex-wrap" style={{ marginTop: "20px" }}>
                    <button className="btn border rounded-4">ReactJS</button>
                    <button className="btn border rounded-4">CSS3</button>
                    <button className="btn border rounded-4">Bootstrap 5</button>
                    <button className="btn border rounded-4">Netlify</button>
                  </div>
                </div>
                <div className="card-img-overlay">
                  <div className="overlay-content">
                    <p style={infoStyles}>
                    Welcome to my portfolio! This collection showcases my passion and expertise as a Computer Science student, highlighting skills in web development and data science. Explore projects that demonstrate my commitment to excellence and innovation.</p>
                    <a href="https://github.com/Vojaspy/Portfolio" className="btn btn-primary" target="_blank" style={{ marginTop: "20px" }}>
                      To Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-4 p-2">
            <div className="card">
              <div className="card-img-container">
                <img src={teaLeaves} className="card-img-top" alt="Tea Leaves" />
                <div style={{ padding: "20px" }}>
                  <h5 className="card-title">Identify Diseases in Tea Leaves</h5>
                  <div className="d-flex justify-content-evenly flex-wrap" style={{ marginTop: "20px" }}>
                    <button className="btn border rounded-4">Python</button>
                    <button className="btn border rounded-4">Tensorflow</button>
                    <button className="btn border rounded-4">Keras</button>
                    <button className="btn border rounded-4">Kaggle</button>
                  </div>
                </div>
                <div className="card-img-overlay">
                  <div className="overlay-content">
                    <p style={infoStyles}>
                    Discover my deep learning project identifying diseases in tea leaves with 80% accuracy. Using models like VGG16, ResNet-50, and EfficientNet, this project showcases neural network techniques for agricultural diagnostics. See how these models effectively classify and diagnose diseases in tea plants, demonstrating reliability and precision.
                    </p>
                    <a href="https://github.com/Vojaspy/Deep-Learning-Project" className="btn btn-primary" target="_blank" style={{ marginTop: "20px" }}>
                      To Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-4 p-2">
            <div className="card">
              <div className="card-img-container">
                <img src={site} className="card-img-top" alt="SiteGenie" />
                <div style={{ padding: "20px" }}>
                  <h5 className="card-title">SiteGenie</h5>
                  <div className="d-flex justify-content-evenly flex-wrap" style={{ marginTop: "20px" }}>
                    <button className="btn border rounded-4">JavaScript</button>
                    <button className="btn border rounded-4">NodeJS</button>
                    <button className="btn border rounded-4">ExpressJS</button>
                    <button className="btn border rounded-4">TailwindCSS</button>
                    <button className="btn border rounded-4">OpenAI</button>
                    <button className="btn border rounded-4">SupaBase</button>
                    <button className="btn border rounded-4">AWS</button>
                  </div>
                </div>
                <div className="card-img-overlay">
                  <div className="overlay-content">
                    <p style={infoStyles}>
                    I played a key role in a group project developing SiteGenie, an innovative AI chatbot aimed at enhancing website interactions. Our team trained SiteGenie on user-provided links to seamlessly integrate with websites, significantly improving operational efficiency by delivering instant responses. 
                    </p>
                    <a href="https://github.com/vedanti-u/SiteGenie" className="btn btn-primary" target="_blank" style={{ marginTop: "20px" }}>
                      To Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .card-img-container {
          position: relative;
          overflow: hidden;
        }
        .card-img-top {
          height: 290px; 
          width: 100%;
          object-fit: cover;
        }
        .card-img-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          justify-content: center;
          align-items: center;

        }
        .overlay-content {
          text-align: center;
        }
        .card:hover .card-img-overlay {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .col-lg-4 {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
