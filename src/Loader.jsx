// VideoLoader.js
import React, { useEffect } from "react";
import loading from './assets/loader.svg'
import './styles/loading.css'
export function VideoLoader() {

  return (
    <div className="video-loader">
      <img className="loader" src = {loading}/>
    </div>
  );
}

export default VideoLoader;