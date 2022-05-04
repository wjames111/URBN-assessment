import React from 'react';
import { connect } from 'react-redux';
import VideoItem from './VideoItem';
import { selectVideo } from '../actions/videos';

function VideoList({ isLoading, allVideos, selectVideo }) {

    const renderVideoItem = allVideos.map((video, i) => {
        // Using index here for key, video.id had a duplicate
        return <VideoItem key={i} video={video} selectVideo={selectVideo}/>;
    });

    const videoListErrMsg = 'Please search for a term to show related videos.';

	return (
		<div>
            { 
                isLoading ? 
                <div className="ui active inverted dimmer">
                    <div className="ui text loader">Loading</div>
                </div> : 
                null 
            }
            <div className="ui relaxed divided list">
                {/* Confirm video list has been recieved before rendering them */} 
                { allVideos ? renderVideoItem : videoListErrMsg }
            </div>
		</div>
	);
}

const mapStateToProps = state => ({
    isLoading: state.videos.isLoading,
    allVideos: state.videos.allVideos,
});

const mapDispatchToProps = dispatch => ({
    selectVideo: (video) => dispatch(selectVideo(video)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
