import React from "react";
import "./Login.css";
import Navbar from "../navigation/Navbar";
import Example from "./Example";


function Login({isDarkMode}) {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
      } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
      }
    return (<div className="login">
        <Navbar isDarkMode={isDarkMode} />
        
        <Example />
        
        </div>
        
        
    );
    }
    export default Login;