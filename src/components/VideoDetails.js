import React from 'react';

function VideoDetails({ currentVideo }) {
	const videoDetails = currentVideo.snippet;
	const datePublished = new Date(videoDetails.publishTime).toString();
	return (
		<div className='video__description'>
			<h4>Published: { datePublished }</h4>
			<h4>Channel: { videoDetails.channelTitle }</h4>
			<p>{ videoDetails.description }</p>
		</div>
	);
}

export default VideoDetails;
