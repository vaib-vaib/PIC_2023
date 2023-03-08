import React, { useState } from "react";

import "D:/Academics/FinalYearProject/holly-react-main/src/routes/style.css";
import img from '../assets/images/logo.jpg';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const styles = {
  app : {
    fontFamily: "sans-serif",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "20px",
    height: "20vh",
    fontFamily: "Cambria, Cochin, Georgia, Times, Times New Roman, serif",
    backgroundColor: "#f8f9fd",
    paddingTop:"350px"
  },
  
  
  input: {
    height: "25px",
    border: "1px solid rgba(0, 0, 0, 0.2)",
  },
  
  inputS: {
    marginTop: "10px",
    cursor: "pointer",
    fontSize: "20px",
    background: "#4452f2",
    border: "1px solid #01d28e",
    color: "#fff",
    padding: "10px 110px"
  },
  
  // inputS:{
  //   background:"black",
  // }
  
  buttoncontainer: {
    display: "flex",
    justifyContent: "center",
  },
  
  loginform: {
    backgroundColor:"rgb(205, 239, 251)",
    padding: "6rem",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  
  listcontainer: {
    display: "flex",
  },
  
  error: {
    color: "red",
    fontSize: "12px",
  },
  
  title: {
    color: "black",
    display: "flex",
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center",
    fontSize: "35px",
    marginTop: "10px",
    marginBottom: "30px",
  },
  
  inputcontainer: {
    display: "flex",
    color: "black",
    flexDirection: "column",
    gap: "8px",
    fontSize: "20px",
    marginBottom: "10px",
  },
  img1 : {
    textAlign: "center",
    display: "block",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    height: "150px",
    width: "200px",
  },

  inputun: {
    fontSize:"15px",
  },
};
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "mnbv@1234"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div style={styles.error}>{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div style={styles.form}>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputcontainer}>
          <label>Username </label>
          <input style={styles.inputun} type="text" name="uname" placeholder="Enter Username" required />
          {renderErrorMessage("uname")}
        </div>
        <div style={styles.inputcontainer}>
          <label>Password </label>
          <input style={styles.inputun} type="password" name="pass" placeholder="Enter Password" required />
          {renderErrorMessage("pass")}
        </div>
        <div style={styles.buttoncontainer}>
          <input style={styles.inputS} type="submit" />
        </div>
      </form>
    </div>
  );

  const navigate = useNavigate(); 
  
  return (
    <div style={styles.app}>
      <div style={styles.loginform}>
      <img style={styles.img1} src={img}/>
        <div style={styles.title}>Sign In</div>
        {isSubmitted ? navigate("home") : renderForm}
      </div>
    </div>
  );
}
