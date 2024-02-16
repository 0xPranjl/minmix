import React, { useState, useRef } from 'react';

const Timeline = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleSeek = (e) => {
    if (videoRef.current) {
      const rect = e.target.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const percent = offsetX / rect.width;
      const seekTime = percent * videoRef.current.duration;
      videoRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  return (
    <div className="video-timeline">
     
      <div className="timeline" onClick={handleSeek}>
        <div className="progress" style={{ width: `${(currentTime / videoRef.current?.duration) * 100}%` }} />
      </div>
    </div>
  );
};

export default Timeline;
