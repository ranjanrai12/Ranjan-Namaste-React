import NotFoundImage from "../Images/not-found.jpg";
// import { useRouteError, Link } from "react-router-dom";
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="error-page">
      <img src={NotFoundImage} alt="not-found"></img>
      <h1>Oops! The restaurant you're looking for can't be found.</h1>
      <h3 className="error-data">{error.data}</h3>
      <h3 className="error-back-home">
        <Link to="/">Back Home</Link>
      </h3>
    </div>
  );
};

export default Error;
