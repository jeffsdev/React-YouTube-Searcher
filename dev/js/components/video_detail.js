import React from 'react';


const VideoDetail = ({video}) => {

  if(!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail">
      <div className="embed-responsive">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div className="details-title">{video.snippet.title}</div>
        <div className="details-description">{video.snippet.description}</div>
      </div>
    </div>
  );

};

export default VideoDetail;
