import React from 'react';


const VideoDetail = ({video}) => {

  if(!video) {
    return <h1 className="search-error">No Results...</h1>;
  }

  const videoId = video.id.videoId;
  const channelId = video.snippet.channelId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  const channelUrl = `https://www.youtube.com/channel/${channelId}`;

  return (
    <div className="video-detail">
      <div className="embed-responsive">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <h2>Title</h2>
        <div className="details-title">{video.snippet.title}</div>
        <h2>Channel Name</h2>
        <a
          target="_blank"
          href={channelUrl}  className="details-channel">{video.snippet.channelTitle}
          </a>
        <h2>Description</h2>
        <div className="details-description">{video.snippet.description}</div>
      </div>
    </div>
  );

};

export default VideoDetail;
