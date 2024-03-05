import Navbar from "../../Navbar";
import "./page.css";

export default function Register() {
  return (
    <>
      <Navbar />
      {/* Header */}
      <div className="register">
        <div className="register-header">
          <a href="/">Home</a>
          <div>/</div>
          <div className="register-header-page">
            <p>Create Account</p>
          </div>
        </div>

        {/* Body */}
        <div className="register-body">
          <div className="login">
            <h1>Create Account</h1>
            <p>Please register using account detail below.</p>
          </div>
          <form action="">
            <div className="first-name">
              <input
                type="text"
                id="first-name"
                placeholder="First Name"
                required
              />
            </div>
            <div className="last-name">
              <input
                type="text"
                id="last-name"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="email">
              <input type="text" id="email" placeholder="Email" required />
            </div>
            <div className="phone">
              <input
                type="text"
                id="phone"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="password">
              <input
                type="text"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="enter">
              <button type="submit" className="register-button">
                Create
              </button>
              <a href="/">Return to Store</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
