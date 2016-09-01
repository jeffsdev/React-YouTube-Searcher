import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {

  const videoItems = props.videos.map((video) => {
    return <VideoListItem
      onVideoSelect={props.onVideoSelect}
      key={video.etag}
      video={video}
      />
  });


  return (
    <div className="recommended-videos">
    <h2>Recommended Videos</h2>
      <ul>
        {videoItems}
      </ul>
    </div>
  );
};

export default VideoList;
