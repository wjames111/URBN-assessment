import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import VideoDetails from './VideoDetails';
import { selectVideo } from '../actions/videos';

function RenderVideo({ currentVideo }) {
    return (
        <main>
            <h1 className="ui header">{currentVideo.snippet.title}</h1>
            <div className="video__wrapper">
                <div className="ui embed">
                    <iframe title="youtube player" src={`https://www.youtube.com/embed/${currentVideo.id.videoId}`} />
                </div>
            </div>
            <VideoDetails currentVideo={currentVideo} />
        </main>
    );
}

function CurrentVideo({
 currentVideo, allVideos, searchCount, selectVideo,
}) {
    useEffect(() => {
        // Choose a default current video when no video has been chosen
        if (Object.keys(currentVideo).length === 0) {
            // Get random number from within list of videos
            const randomVideo = Math.floor(Math.random() * (searchCount + 1));
            selectVideo(allVideos[randomVideo]);
        }
    }, []);

    return (
        <div className="featured-video__container">
            {
                // make sure currentVideo has a value before rendering it
                (Object.keys(currentVideo).length === 0) ? 'Please select a video' : <RenderVideo currentVideo={currentVideo} />
            }
        </div>
    );
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
