import React from 'react';
import { connect } from 'react-redux';
import VideoItem from './VideoItem';
import { selectedVideo } from '../actions/videos';

function VideoList({ isLoading, allVideos, selectVideo }) {

    const renderVideoItem = allVideos.map((video) => {
        return <VideoItem video={video.snippet} selectVideo={selectVideo}/>;
    });

    const noVideosMsg = 'Please search for a term to show related videos.';

	return (
		<div>
			<h1>Video List</h1>
            <h2>{isLoading ? 'loading...' : 'not loading...'}</h2>
            <div className="ui relaxed divided list">
                { allVideos ? renderVideoItem : noVideosMsg }
            </div>
		</div>
	);
}

const mapStateToProps = state => ({
    isLoading: state.videos.isLoading,
    allVideos: state.videos.allVideos,
});

const mapDispatchToProps = dispatch => ({
    selectVideo: (video) => dispatch(selectedVideo(video)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
