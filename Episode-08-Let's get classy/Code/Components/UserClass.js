import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log(this.props.name + " Child Constructor is called");
  }
  componentDidMount() {
    // console.log(this.props.name + " Child didMount is called");
    // this.interval = setInterval(() => {
    //   console.log("Child Did mount is called");
    // }, 1000);
  }
  componentDidUpdate() {
    // console.log(this.props.name + "Child component did update called");
  }
  componentWillUnmount() {
    // console.log("Child component destroy");
    // clearInterval(this.interval);
  }
  render() {
    const { name, location, contact } = this.props;
    // console.log(this.props.name + " Child Render is called");

    return (
      <div className="user-card">
        <header>Class Based</header>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
