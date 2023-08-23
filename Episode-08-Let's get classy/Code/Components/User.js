import { useState } from "react";

const User = (props) => {
  const [count0] = useState(0);
  const [count1] = useState(1);

  return (
    <div className="user-card">
      <header>Function Based</header>
      <h1>{count0}</h1>
      <h1>{count1}</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: {props.location}</h3>
      <h4>Contact: {props.contact}</h4>
    </div>
  );
};

export default User;
