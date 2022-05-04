import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import CurrentVideo from './CurrentVideo';

function Home({allVideos}) {
	return (
		<div>
			<SearchBar />
			// Keep CurrentVideo from rendering before recieving video list 
			{ allVideos.length ? <CurrentVideo /> : <h2>loading...</h2> }
			<VideoList />
		</div>
	);
}

const mapStateToProps = state => ({
    allVideos: state.videos.allVideos,
});

export default connect(mapStateToProps, null)(Home);
