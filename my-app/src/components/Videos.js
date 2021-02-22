import React, { useState, useRef } from "react";

import Rick1 from "../videos/rick-1.mp4";
import Rick2 from "../videos/rick-2.mp4";
import Rick3 from "../videos/rick-3.mp4";
import Rick4 from "../videos/rick-4.mp4";

export default function Videos() {
  const ModalVideoRef = useRef();
  const Rick1Ref = useRef();
  const Rick2Ref = useRef();
  const Rick3Ref = useRef();
  const Rick4Ref = useRef();

  let [videoKey, setVideoKey] = useState(1);
  let [isModalOn, setIsModalOn] = useState(false);
  let [modalVideo, setModalVideo] = useState(Rick2);

  function activateModal(videoRef, video) {
    videoRef.current.play();
    setModalVideo(video);
    setVideoKey(videoKey + 1);
    setIsModalOn(true);
    ModalVideoRef.current.currentTime = videoRef.current.currentTime;
    ModalVideoRef.current.play();
  }

  function disableModal(e) {
    let source = e.target.querySelector(":scope > *");
    if (source.src && source.src.search(modalVideo)) {
      setIsModalOn(true);
    } else {
      setIsModalOn(false);
    }
  }

  return (
    <>
      <div
        className="modal"
        style={{ display: isModalOn ? "block" : "none" }}
        onClick={disableModal}
      >
        <span className="close">&times;</span>
        <div className="center">
          <video
            className="modal-content"
            controls
            key={videoKey}
            ref={ModalVideoRef}
          >
            <source src={modalVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="container">
        <h1>Videos.</h1>
        <br />
        <p>
          I couldn't think of any good videos so these are all rick roll videos.
          You should probably mute. I'm warning you!
        </p>
        <div className="featured-section">
          <video
            className="featured"
            width="300px"
            height="200px"
            controls
            ref={Rick1Ref}
            onClick={() => activateModal(Rick1Ref, Rick1)}
          >
            <source src={Rick1} type="video/mp4" />
          </video>
          <video
            className="featured"
            width="300px"
            height="200px"
            controls
            ref={Rick2Ref}
            onClick={() => activateModal(Rick2Ref, Rick2)}
          >
            <source src={Rick2} type="video/mp4" />
          </video>
          <video
            className="featured"
            width="300px"
            height="200px"
            controls
            ref={Rick3Ref}
            onClick={() => activateModal(Rick3Ref, Rick3)}
          >
            <source src={Rick3} type="video/mp4" />
          </video>
          <video
            className="featured"
            width="300px"
            height="200px"
            controls
            ref={Rick4Ref}
            onClick={() => activateModal(Rick4Ref, Rick4)}
          >
            <source src={Rick4} type="video/mp4" />
          </video>
        </div>
        <br />
        <p>*Click play button to play in place or click video to enlarge*</p>
      </div>
    </>
  );
}
