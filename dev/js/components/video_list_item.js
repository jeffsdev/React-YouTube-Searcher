import React from 'react';



const VideoListItem = ({video}) => {
  // const video = props.video; same thing as ({video}) above, rather than (props)

  const imageURL = video.snippet.thumbnails.default.url;

  return (

    <li className="">

      <div className="video-list">
        <div className="">
          <img className="media-object" src={imageURL}/>
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>

    </li>

  );
};

export default VideoListItem;
