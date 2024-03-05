import Navbar from "../Navbar";
import "./page.css";

export default function Account() {
  return (
    <>
      <Navbar />
      <div className="account">
        {/* Header */}
        <div className="account-header">
          <a href="/">Home</a>
          <div>/</div>
          <div className="account-header-page">
            <p>Account</p>
          </div>
        </div>

        {/* Body */}
        <div className="account-body">
          <div className="login">
            <h1>Login</h1>
            <p>Please login using account detail below.</p>
          </div>
          <form action="">
            <div className="email">
              <input type="text" id="email" placeholder="Email" required />
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
              <button type="submit" className="account-button">
                Login
              </button>
              <a href="account/register">Create Account</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
