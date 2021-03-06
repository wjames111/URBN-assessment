import React from 'react';
import '../scss/video-item.scss';

function VideoItem({ video, selectVideo }) {
	return (
		<div role="button" className="video__item item" onClick={() => selectVideo(video)} onKeyDown={() => selectVideo(video)}>
            <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.default.url} />
            <div className="content">
                <div className="header">
                    <h4>{ video.snippet.title }</h4>
                </div>
            </div>
		</div>
	);
}

export default VideoItem;
