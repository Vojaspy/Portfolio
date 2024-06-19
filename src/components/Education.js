
const sectionStyles = {
    paddingTop :'125px',
    // paddingTop : '15px',
    paddingLeft : '25px',
    paddingRight : '25px',
    backgroundColor : '#e6e6e6',
    // height :'100vh',
    // marginBottom : '50px'
};

const headingStyles = {
    color : 'teal',

}

const dateStyles = {
    fontSize : '20px'
};

const edheadingStyles = {
    fontSize : '30px',
    color : '#da7171',

};


// const responsiveStyles = `
//   @media (max-width: 992px) {
//     .edheadingStyles {
//       font-size: 25px !important;
//     }
//     .dateStyles {
//       font-size: 18px !important;
//     }
//     .eduItemStyles {
//       margin-bottom: 20px !important;
//     }
//     section {
//       height: auto !important;
//     }
//   }
//   @media (max-width: 768px) {
//     .edheadingStyles {
//       font-size: 22px !important;
//     }
//     .dateStyles {
//       font-size: 16px !important;
//     }
//     .eduItemStyles {
//       margin-bottom: 15px !important;
//     }
//   }
//   @media (max-width: 576px) {
//     .edheadingStyles {
//       font-size: 20px !important;
//     }
//     .dateStyles {
//       font-size: 14px !important;
//     }
//     .eduItemStyles {
//       margin-bottom: 10px !important;
//     }
//   }
// `;

const Education = () => {
    return ( 
        <section id="education" style={sectionStyles}>
            {/* <style>{responsiveStyles}</style> */}
            <h1 style={headingStyles}>Education</h1>
            <div className = 'container-fluid' style={{marginTop:'30px'}}>
                <div className = 'row'>
                    <div>
                        <ul>
                            <li>
                        <h1 style = {edheadingStyles}>BTech <span>(2021 - Present)</span></h1>
                        <h2>Ramdeobaba College of Engineering and Management</h2>
                        <h3>Computer Science and Engineering with Specialization in <span style = {{color:'teal'}}>Data Science</span></h3>
                            </li>
                            <li style={{marginTop : '40px '}}>
                            <h1 style = {edheadingStyles}>Higher Secondary Education <span>(2019 - 2021)</span></h1>
                        <h2>Dinanath High School and Juniour College</h2>
                        <h3 style={{color:'teal'}}>HSC</h3> 
                            </li>
                            <li style={{marginTop:'40px'}}>
                            <h1 style = {edheadingStyles}>Secondary Education <span>(2005 - 2019)</span></h1>
                        <h2>Bhavan's BP Vidya Mandir</h2>
                        <h3 style={{color:'teal'}}>SSC</h3>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Education;