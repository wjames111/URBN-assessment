import React from 'react';
import '../scss/video-item.scss';

function VideoItem({ video, selectVideo }) {
	return (
		<div className="video__item item" onClick={() =>selectVideo(video)}>
            <div className="content">
                <div className="header">
                    <h4>{video.snippet.title}</h4>
                </div>
            </div>
            <img className="ui image" src={video.snippet.thumbnails.default.url} />
		</div>
	);
}

export default VideoItem;
