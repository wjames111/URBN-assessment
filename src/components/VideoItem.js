import React from 'react';
import '../scss/video-item.scss';

function VideoItem({ video, selectVideo }) {
	return (
		<div className="video__item item" onClick={() =>selectVideo(video)}>
            <div className="content">
                <div className="header">
                    <h4>{video.title}</h4>
                </div>
            </div>
            <img className="ui image" src={video.thumbnails.default.url} />
		</div>
	);
}

export default VideoItem;
