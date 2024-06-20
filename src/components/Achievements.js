import LeetCode from "../assets/LeetCode.png";
import { BoxArrowUpRight } from "react-bootstrap-icons";
import Hackerrank from "../assets/Hackerrank-new.png";
import CodeChef from '../assets/Codechef.png';
import gfg from '../assets/gfg.png';

const sectionStyles = {
  paddingTop: "125px",
  paddingLeft: "25px",
  paddingRight: "25px",
  backgroundColor: "#f0f6f6",
  // backgroundColor:'#01a6b0'
};

const headingStyles = {
  color: "teal",
};

const liStyles = {
  fontSize: "20px",
  margin: "10px 0",
};

const Achievements = () => {
  return (
    <section id="achievements" style={sectionStyles}>
      <h1 style={headingStyles}>Achievements</h1>
      <div className="container-fluid">
        <div className="row justify-content-center" style={{ marginTop: '30px' }}>
          <div className="col-md-5 mb-4" style={{ border: '2px solid black', margin: '10px' }}>
            <a href="https://leetcode.com/u/Vojas_Gonnade/" target="_blank" rel="noopener noreferrer">
              <img src={LeetCode} alt="LeetCode" className="img-fluid" style={{width:'50%', height:'auto',marginTop:'40px'}}/><span style={{color:'black'}}><BoxArrowUpRight/></span>
            </a>
            <ul style={{ marginTop: '30px' }}>
              <li style={liStyles}>
                Solved <span style={{ color: 'brown' }}>100+ Problems</span> on LeetCode
              </li>
              <li style={liStyles}>
                Achieved <span style={{ color: 'brown' }}>March LeetCoding Challenge</span> Badge
              </li>
              <li style={liStyles}>
                Achieved <span style={{ color: 'brown' }}>50 Days of LeetCoding</span> Badge
              </li>
            </ul>
          </div>
          <div className="col-md-5 mb-4" style={{ border: '2px solid black', margin: '10px' }}>
            <a href="https://www.hackerrank.com/profile/vojasgonnade07" target="_blank" rel="noopener noreferrer">
              <img src={Hackerrank} alt="Hackerrank" className="img-fluid" style={{width:'50%', height:'auto',marginTop:'40px'}} /><span style={{color:'black'}}><BoxArrowUpRight/></span>
            </a>
            <ul style={{ marginTop: '30px' }}>
              <li style={liStyles}>
                Achieved <span style={{ color: 'brown' }}>3 star Problem Solving</span> Badge
              </li>
              <li style={liStyles}>
                Achieved <span style={{ color: 'brown' }}>5 star C++</span> Badge
              </li>
              <li style={liStyles}>
                Achieved <span style={{ color: 'brown' }}>5 star Python</span> Badge
              </li>
              <li style={liStyles}>
                Achieved <span style={{ color: 'brown' }}>1 star SQL</span> Badge
              </li>
            </ul>
          </div>
        </div>


        <div className="row justify-content-center" style={{ marginTop: '30px' }}>
          <div className="col-md-5 mb-4" style={{ border: '2px solid black', margin: '10px' }}>
            <a href="https://www.codechef.com/users/vojasgonnade" target="_blank" rel="noopener noreferrer">
              <img src={CodeChef} alt="LeetCode" className="img-fluid" style={{width:'50%', height:'auto',marginTop:'40px'}}/><span style={{color:'black'}}><BoxArrowUpRight/></span>
            </a>
            <ul style={{ marginTop: '30px' }}>
              <li style={liStyles}>
                <span style={{ color: 'brown' }}>1 star coder</span> on CodeChef
              </li>
              <li style={liStyles}>
                Highest Rating : <span style={{ color: 'brown' }}>1261</span>
              </li>
              <li style={liStyles}>
                Participated in <span style={{ color: 'brown' }}>10+ Contests</span> on CodeChef
              </li>
            </ul>
          </div>
          <div className="col-md-5 mb-4" style={{ border: '2px solid black', margin: '10px' }}>
            <a href="https://www.geeksforgeeks.org/user/vojasgonedt2/" target="_blank" rel="noopener noreferrer">
              <img src={gfg} alt="Hackerrank" className="img-fluid" style={{width:'50%', height:'auto',marginTop:'40px'}} /><span style={{color:'black'}}><BoxArrowUpRight/></span>
            </a>
            <ul style={{ marginTop: '30px' }}>
              <li style={liStyles}>
                Overall Coding <span style={{ color: 'brown' }}>score 90</span>
              </li>
              <li style={liStyles}>
                Solved <span style={{ color: 'brown' }}>50+ Problems</span> on GFG
              </li>
              <li style={liStyles}>
                Monthly Coding <span style={{ color: 'brown' }}>score 34</span>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
