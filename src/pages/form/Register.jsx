import LoginImg from "../../assets/login.png";
import "./Form.scss";

const Register = () => {
  return (
    <main className="d-flex justify-content-center align-items-center">
      <form className="form-signin p-4 bg-light m-auto text-center shadow rounded">
        <img
          className="mb-4"
          src={LoginImg}
          alt="Logo Image"
          width={72}
          height={57}
        />
        <h1 className="h3 mb-3 fw-normal">Register</h1>
        <div className="form-floating mb-3 ">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <p className="mb-3 text-start text-muted">Forgot Password?</p>
        <button className="w-100 btn btn-lg btn-login" type="submit">
          Sign in
        </button>
      </form>
    </main>
  );
};

export default Register;
