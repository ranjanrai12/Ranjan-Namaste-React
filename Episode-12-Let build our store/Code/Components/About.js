import React, { useEffect } from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about-card">
      <User name="Ranjan Rai" location="Bihar" contact="@ranjanrai" />
    </div>
  );
};

export default About;
