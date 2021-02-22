import React, { useState } from "react";

export default function Email() {
  let [email, setEmail] = useState("");
  let [validation, setValidation] = useState("");

  function handleForm(e) {
    e.preventDefault();
    if (validateEmail(email)) {
      setValidation("Email successfully recorded!");
    } else {
      setValidation("Invalid email address!");
    }
  }

  function validateEmail(email) {
    email = email.trim();
    if (email.search(" ") >= 0) {
      return 0;
    }
    if (email.length < 6) {
      return 0;
    }
    if (email.search("@") === -1) {
      return 0;
    }
    if (
      email.slice(email.length - 4, email.length) !== ".com" &&
      email.slice(email.length - 4, email.length) !== ".edu"
    ) {
      return 0;
    }
    return 1;
  }

  return (
    <>
      <div className="container">
        <h1>Email.</h1>
        <br />
        <form>
          <label htmlFor="email">Email: </label>
          <br />
          <input
            type="text"
            id="email"
            name="fname"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <button onClick={(e) => handleForm(e)} value="Submit">
            Done
          </button>
          <br />
          <br />
        </form>
        <p>{validation}</p>
      </div>
    </>
  );
}
