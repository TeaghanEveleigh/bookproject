import React from "react";
import "./Login.css";
import Navbar from "../navigation/Navbar";

function Login() {
    return (

        <div className="login">
        <Navbar isDarkMode={true}/>
        <div className="login-content">
            <h1>Login</h1>
            <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
            </form>
        </div>
        </div>
    );
    }
    export default Login;