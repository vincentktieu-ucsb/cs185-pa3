import React, { useState } from 'react';

export default function Email() {
  let [email, setEmail] = useState('');
  let [validation, setValidation] = useState('');

  function handleForm(e) { 
    e.preventDefault(); 
    if (validateEmail(email)) {
      setValidation('Email successfully recorded!');
    } else {
      setValidation('Invalid email address!');
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
    if (email.slice(email.length-4, email.length) !== ".com" && email.slice(email.length-4, email.length) !== ".edu") {
      return 0;
    }
    return 1;
  }

  return (
    <>
      <header>
        <h3 class="nav-brand">Vincent Tieu's PA2</h3>
        <nav>
          <ul class="nav-links">
            <li>
              <a href="/">Text</a>
            </li>
            <li>
              <a href="images">Images</a>
            </li>
            <li>
              <a href="videos">Videos</a>
            </li>
            <li>
              <a href="table">Table</a>
            </li>
            <li>
              <a href="email" id="page-selected">
                Email
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <button onclick="topFunction()" id="back-to-top-btn">
        &#8593;
      </button>

      <div class="container">
        <h1>Email.</h1>
        <br />
        <form>
          <label for="email">Email: </label>
          <br />
          <input type="text" id="email" name="fname" value={email} onChange={(e) => setEmail(e.target.value)}/>
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