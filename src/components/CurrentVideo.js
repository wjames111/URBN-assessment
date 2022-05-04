import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../scss/current-video.scss';
import VideoDetails from './VideoDetails';
import { selectVideo } from '../actions/videos';

function RenderVideo({ currentVideo }){
    return (
        <div>
            <h1>{currentVideo.snippet.title}</h1>
            <iframe src={`https://www.youtube.com/embed/${currentVideo.id.videoId}`} />
            <VideoDetails currentVideo={currentVideo} />
        </div>
    );
}

function CurrentVideo({ currentVideo, allVideos, searchCount, selectVideo }) {

    useEffect(() => {
        // Choose a default current video when no video has been chosen
        if (Object.keys(currentVideo).length === 0){
            // Get random number from within list of videos
            const randomVideo = Math.floor(Math.random() * (searchCount + 1));
            selectVideo(allVideos[randomVideo]);
        }
    }, []);

    return (
        <div>
            // make sure currentVideo has a value before rendering it
            { (Object.keys(currentVideo).length === 0) ? 'Please select a video' : <RenderVideo currentVideo={currentVideo} /> }
        </div>
    )
}

const mapStateToProps = state => ({
    currentVideo: state.videos.currentVideo,
    allVideos: state.videos.allVideos,
    searchCount: state.videos.searchCount,
});

const mapDispatchToProps = dispatch => ({
    selectVideo: (video) => dispatch(selectVideo(video)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentVideo);
