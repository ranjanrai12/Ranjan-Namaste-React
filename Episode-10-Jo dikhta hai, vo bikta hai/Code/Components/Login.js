const Login = () => {
  return (
    <div className="login-form">
      <div className="login-content">
        <h2>LOGIN</h2>
        <input type="email" placeholder="Email"></input>
        <input type="password" placeholder="password"></input>
        <div className="action">
          <button type="button" className="login-btn">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
