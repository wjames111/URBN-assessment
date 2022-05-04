import React from 'react';

function VideoDetails({ currentVideo }) {
	const videoDetails = currentVideo.snippet;
	const datePublished = new Date(videoDetails.publishTime).toString();
	return (
		<div className="details__container ui segment">
			<h2 className="ui header">Channel: { videoDetails.channelTitle }</h2>
			<h4>Published: { datePublished }</h4>
			<h4>Channel: { videoDetails.channelTitle }</h4>
			<p>{ videoDetails.description }</p>
		</div>
	);
}

export default VideoDetails;
