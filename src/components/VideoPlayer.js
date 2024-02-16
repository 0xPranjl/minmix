import React, { useState, useEffect } from 'react';
import { Slider } from 'antd';

const VideoPlayer = ({ videoFile }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (videoFile) {
      // Load video metadata
      const videoElement = document.getElementById('videoElement');
      videoElement.load();
      videoElement.addEventListener('loadedmetadata', () => {
        setDuration(videoElement.duration);
      });
    }
  }, [videoFile]);

  const handleTimeUpdate = (e) => {
    setCurrentTime(e.target.currentTime);
  };

  const handleSliderChange = (value) => {
    const videoElement = document.getElementById('videoElement');
    videoElement.currentTime = value;
    setCurrentTime(value);
  };

  return (
    <>
      {videoFile && (
        <div>
          <video
            id="videoElement"
            src={URL.createObjectURL(videoFile)}
            controls
            style={{ width: '55%',height:'60%' }}
           
          />
          {/* <Slider
            value={currentTime}
            max={duration}
            onChange={handleSliderChange}
          /> */}
        </div>
      )}
    </>
  );
};

export default VideoPlayer;
