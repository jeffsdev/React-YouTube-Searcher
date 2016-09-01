import React from 'react';



const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video; same thing as ({video}) above, rather than (props)

  const imageURL = video.snippet.thumbnails.default.url;

  return (

    <li className="" onClick={() => onVideoSelect(video)}>

      <div className="video-item">
        <img className="media-object" src={imageURL}/>

        <div className="media-body">
          <span className="media-heading">{video.snippet.title}</span>
        </div>
      </div>

    </li>

  );
};

export default VideoListItem;
