import React, { useState } from "react";

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
  let [isModalOn, setIsModalOn] = useState(false);
  let [modalImg, setModalImg] = useState(Runeterra1);

  window.onscroll = () => scrollFunction();

  function scrollFunction() {
    if (
      !isModalOn &&
      (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    ) {
      setDisplayBackToTopButton(true);
    } else {
      setDisplayBackToTopButton(false);
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function activateModal(img) {
    setModalImg(img);
    setIsModalOn(true);
    setDisplayBackToTopButton(false);
  }

  function disableModal(e) {
    if (e.target.src && e.target.src.search(modalImg)) {
      setIsModalOn(true);
    } else {
      setIsModalOn(false);
    }
  }

  return (
    <>
      <button
        onClick={topFunction}
        id="back-to-top-btn"
        style={{ display: displayBackToTopButton ? "block" : "none" }}
      >
        &#8593;
      </button>

      {/* https://www.w3schools.com/howto/howto_css_modal_images.asp */}
      <div
        className="modal"
        style={{ display: isModalOn ? "block" : "none" }}
        onClick={(e) => disableModal(e)}
      >
        <span className="close">&times;</span>
        <div className="center">
          <img src={modalImg} className="modal-content" alt="" />
        </div>
      </div>

      <div className="container">
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
        <div className="featured-section">
          <img
            src={Runeterra1}
            className="featured-image"
            onClick={() => activateModal(Runeterra1)}
            alt=""
          />
          <img
            src={Runeterra2}
            className="featured-image"
            onClick={() => activateModal(Runeterra2)}
            alt=""
          />
          <img
            src={Runeterra3}
            className="featured-image"
            onClick={() => activateModal(Runeterra3)}
            alt=""
          />
          <img
            src={Hearthstone1}
            className="featured-image"
            onClick={() => activateModal(Hearthstone1)}
            alt=""
          />
          <img
            src={Hearthstone2}
            className="featured-image"
            onClick={() => activateModal(Hearthstone2)}
            alt=""
          />
          <img
            src={Hearthstone3}
            className="featured-image"
            onClick={() => activateModal(Hearthstone3)}
            alt=""
          />
          <img
            src={Chess1}
            className="featured-image"
            onClick={() => activateModal(Chess1)}
            alt=""
          />
          <img
            src={Chess2}
            className="featured-image"
            onClick={() => activateModal(Chess2)}
            alt=""
          />
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
        <div className="featured-section">
          <img
            src={Monopoly1}
            className="featured-image"
            onClick={() => activateModal(Monopoly1)}
            alt=""
          />
          <img
            src={Monopoly2}
            className="featured-image"
            onClick={() => activateModal(Monopoly2)}
            alt=""
          />
          <img
            src={Unstable1}
            className="featured-image"
            onClick={() => activateModal(Unstable1)}
            alt=""
          />
          <img
            src={Unstable3}
            className="featured-image"
            onClick={() => activateModal(Unstable3)}
            alt=""
          />
          <img
            src={Unstable2}
            className="featured-image"
            onClick={() => activateModal(Unstable2)}
            alt=""
          />
          <img
            src={Rival1}
            className="featured-image"
            onClick={() => activateModal(Rival1)}
            alt=""
          />
          <img
            src={Rival2}
            className="featured-image"
            onClick={() => activateModal(Rival2)}
            alt=""
          />
          <img
            src={Rival3}
            className="featured-image"
            onClick={() => activateModal(Rival3)}
            alt=""
          />
          <img
            src={Rival4}
            className="featured-image"
            onClick={() => activateModal(Rival4)}
            alt=""
          />
        </div>
        <br />
        <p>*Click image to enlarge*</p>
        <br />
      </div>
      <br />
    </>
  );
}
