import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {
  return (
    <ul className="video-list">
      {props.videos.length}
    </ul>
  );
};

export default VideoList;
