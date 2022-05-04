import React from 'react';

function VideoDetails({videoSelected}) {
	const datePublished = new Date(videoSelected.snippet.publishTime).toString()
	return (
		<div className='video__description'>
			<h4>Published: {datePublished}</h4>
			<h4>Channel: {videoSelected.snippet.channelTitle}</h4>
			<p>{videoSelected.snippet.description}</p>
		</div>
	);
}

export default VideoDetails;