import { Router, Link } from '@reach/router';
import './static/css/App.css';
import AddUser from "./views/AddUser";
import LoginUser from "./views/LoginUser";

import { navigate } from '@reach/router';

function App() {
  const logoutUser = () => {
    if(localStorage.getItem("loggedInUser") !== null){
      localStorage.removeItem("loggedInUser")
      navigate("/")
      window.location.reload()
    }
  }

  return (
    <div className="App">
      <h1>
        Hello 
        {
          localStorage.getItem("loggedInUser") ?
          <>&nbsp;{localStorage.getItem("loggedInUser")}!</>:<>!</>
        }
      </h1>
      
      <Link to="/">Home</Link>&nbsp;
      <Link to="/users/register">Register</Link>&nbsp;
      <Link to="/users/login">Login</Link>&nbsp;

      <button onClick={logoutUser}>Logout</button>

      <Router >
        <AddUser path="/users/register"/>
        <LoginUser path="users/login"/>
      </Router>
    </div>
  );
}

export default App;
