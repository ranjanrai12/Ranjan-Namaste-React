import React, { useEffect } from "react";
import User from "./User";
import UserClass from "./UserClass";

// class About extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("Parent Constructor is called");
//     this.state = {
//       user: {
//         name: "dummy",
//       },
//     };
//   }
//   componentDidMount() {
//     console.log("Parent didMount is called");
//     // APi call
//     setTimeout(() => {
//       this.setState({
//         user: { name: "Ranjan Rai" },
//       });
//     }, 500);
//   }

//   componentDidUpdate() {
//     console.log("Parent componentDidUpdate is called");
//   }

//   render() {
//     console.log("Parent Render is called");
//     return (
//       <div className="about-card">
//         {/* <User name="Ranjan Rai" location="Bihar" contact="@ranjanrai" /> */}
//         <UserClass
//           name={this.state.user.name}
//           location="Bihar"
//           contact="@ranjanrai"
//         />
//       </div>
//     );
//   }
// }

const About = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("About Functional component timer");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <div className="about-card">
      <User name="Ranjan Rai" location="Bihar" contact="@ranjanrai" />
      {/*<UserClass name="Ranjan Rai" location="Bihar" contact="@ranjanrai" />*/}
    </div>
  );
};

export default About;
