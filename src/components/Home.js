import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import CurrentVideo from './CurrentVideo';

function Home({allVideos}) {
	return (
		<div>
			<div>
				<SearchBar />
				{ allVideos.length ? <CurrentVideo /> : <h2>loading...</h2> }
				<VideoList />
			</div>
			<h1>App is running!</h1>
		</div>
	);
}

const mapStateToProps = state => ({
    allVideos: state.videos.allVideos,
});

export default connect(mapStateToProps, null)(Home);
