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
    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  return (
    <>
      <header>
        <h3 class="nav-brand">Vincent Tieu's PA2</h3>
        <nav>
          <ul class="nav-links">
            <li>
              <a href="index">Text</a>
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