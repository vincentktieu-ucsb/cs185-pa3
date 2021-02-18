import React, { useState } from 'react';

import Runeterra1 from "../img/runeterra-1.jpg";
import Runeterra2 from "../img/runeterra-2.jpg";
import Runeterra3 from "../img/runeterra-3.jpg";
import Hearthstone1 from "../img/hearthstone-1.jpeg";
import Hearthstone2 from "../img/hearthstone-2.jpg";
import Hearthstone3 from "../img/hearthstone-3.webp";
import Chess1 from "../img/chess-1.jpeg";
import Chess2 from "../img/chess-2.jpeg";
import Monopoly1 from "../img/monopoly-1.jpg";
import Monopoly2 from "../img/monopoly-2.jpg";
import Unstable1 from "../img/unstable-1.jpeg";
import Unstable2 from "../img/unstable-2.jpg";
import Unstable3 from "../img/unstable-3.jpg";
import Rival1 from "../img/rival-1.png";
import Rival2 from "../img/rival-2.jpg";
import Rival3 from "../img/rival-3.jpg";
import Rival4 from "../img/rival-4.jpg";

export default function Images() {
  let [displayBackToTopButton, setDisplayBackToTopButton] = useState(false);
  
  window.onscroll = () => scrollFunction();
    
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setDisplayBackToTopButton(true);
    } else {
      setDisplayBackToTopButton(false);
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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
              <a href="images" id="page-selected">
                Images
              </a>
            </li>
            <li>
              <a href="videos">Videos</a>
            </li>
            <li>
              <a href="table">Table</a>
            </li>
            <li>
              <a href="email">Email</a>
            </li>
          </ul>
        </nav>
      </header>

      <button onClick={topFunction} id="back-to-top-btn"  style={{display: displayBackToTopButton ? 'block' : 'none' }}>
        &#8593;
      </button>

      {/* https://www.w3schools.com/howto/howto_css_modal_images.asp */}
      <div class="modal">
        <span class="close">&times;</span>
        <div class="center">
          <img class="modal-content" />
        </div>
      </div>

      <div class="container">
        <h1>Images.</h1>
        <br />
        <p>I'm a huge fan of card games and board games!</p>
        <p>
          Among my favorite digital games are Legends of Runeterra, Hearthstone,
          and Chess. I wish I could play any of these games at a more
          competitive level but I like to think that I'm still pretty decent.
          (In Hearthstone, I was once ranked top 626 of all players!).
        </p>
        <br />
        <div class="featured-section">
          <img src={Runeterra1} class="featured-image" />
          <img src={Runeterra2} class="featured-image" />
          <img src={Runeterra3} class="featured-image" />
          <img src={Hearthstone1} class="featured-image" />
          <img src={Hearthstone2} class="featured-image" />
          <img src={Hearthstone3} class="featured-image" />
          <img src={Chess1} class="featured-image" />
          <img src={Chess2} class="featured-image" />
        </div>
        <br />
        <p>*Click image to enlarge*</p>
        <br />
        <p>
          Among my favorite physical games are Monopoly Deal, Unstable Unicorns,
          and Rival Restaurants. During quarantine, my family was looking for
          new ways to pass time besides watching Netflix. We've found that board
          games work great!
        </p>
        <br />
        <div class="featured-section">
          <img src={Monopoly1} class="featured-image" />
          <img src={Monopoly2} class="featured-image" />
          <img src={Unstable1} class="featured-image" />
          <img src={Unstable3} class="featured-image" />
          <img src={Unstable2} class="featured-image" />
          <img src={Rival1} class="featured-image" />
          <img src={Rival2} class="featured-image" />
          <img src={Rival3} class="featured-image" />
          <img src={Rival4} class="featured-image" />
        </div>
        <br />
        <p>*Click image to enlarge*</p>
        <br />
      </div>
      <br />
    </>
  );
}
