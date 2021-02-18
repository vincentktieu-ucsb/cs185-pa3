import React, { useState } from 'react';

import Rick1 from "../videos/rick-1.mp4";
import Rick2 from "../videos/rick-2.mp4";
import Rick3 from "../videos/rick-3.mp4";
import Rick4 from "../videos/rick-4.mp4";

export default function Videos() {
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
              <a href="videos" id="page-selected">
                Videos
              </a>
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

      <button onclick="topFunction()" id="back-to-top-btn">
        &#8593;
      </button>

      <div class="modal">
        <span class="close">&times;</span>
        <div class="center">
          <video class="modal-content" controls>
            <source src="" type="video/mp4" />
          </video>
        </div>
      </div>

      <div class="container">
        <h1>Videos.</h1>
        <br />
        <p>
          I couldn't think of any good videos so these are all rick roll videos.
          You should probably mute. I'm warning you!
        </p>
        <div class="featured-section">
          <video class="featured" width="300px" height="200px" controls>
            <source src={Rick1} type="video/mp4" />
          </video>
          <video class="featured" width="300px" height="200px" controls>
            <source src={Rick2} type="video/mp4" />
          </video>
          <video class="featured" width="300px" height="200px" controls>
            <source src={Rick3} type="video/mp4" />
          </video>
          <video class="featured" width="300px" height="200px" controls>
            <source src={Rick4} type="video/mp4" />
          </video>
        </div>
        <br />
        <p>*Click play button to play in place or click video to enlarge*</p>
      </div>
    </>
  );
}
