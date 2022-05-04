import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../scss/current-video.scss';
import VideoDetails from './VideoDetails';
import { selectedVideo } from '../actions/videos';

function RenderVideo({videoSelected}){
    return (
        <div>
            <h1>{videoSelected.snippet.title}</h1>
            <iframe src={`https://www.youtube.com/embed/${videoSelected.id.videoId}`} />
            <VideoDetails videoSelected={videoSelected} />
        </div>
    );
}

function CurrentVideo({ videoSelected, allVideos, searchCount, selectVideo }) {

    useEffect(() => {
        if (Object.keys(videoSelected).length === 0){
            const randomVideo = Math.floor(Math.random() * (searchCount + 1));
            selectVideo(allVideos[randomVideo]);
        }
    }, []);

    return (
        <div>
            { (Object.keys(videoSelected).length === 0) ? 'Please select a video' : <RenderVideo videoSelected={videoSelected} /> }
        </div>
    )
}

const mapStateToProps = state => ({
    videoSelected: state.videos.currentVideo,
    allVideos: state.videos.allVideos,
    searchCount: state.videos.searchCount,
});

const mapDispatchToProps = dispatch => ({
    selectVideo: (video) => dispatch(selectedVideo(video)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentVideo);
