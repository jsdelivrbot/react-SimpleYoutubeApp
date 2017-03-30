import React from 'react';


const VideoDetail = ({video}) => {
    if(!video){
        return <div>Loading...</div>
    }
    console.log(video);
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return(
      <div className="video-detail col-md-8">
          <div className="embed-responsive embed-responsive-16by9">
              <iframe src={url} className="embed-responsive-item">

              </iframe>
          </div>
          <div className="details">
              <div>Video Title:{video.snippet.title}</div>
              <br/>
              <div>Video Description:{video.snippet.description}</div>
              <br/>
              <div>Channel ID:{video.snippet.channelTitle}</div>

          </div>
      </div>
    );
};

export default VideoDetail;