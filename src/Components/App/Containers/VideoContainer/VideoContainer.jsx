import React from "react";
import './VideoContainer.css';
import video from './video.mp4';

function VideoContainer(){
    return (
      <div className="video-container-container">
        <video src={video} controls/>
      </div>
    );
}

export default VideoContainer;