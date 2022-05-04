import React from 'react';
import { connect } from 'react-redux';
import '../scss/home.scss';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import CurrentVideo from './CurrentVideo';

function Home({ allVideos }) {
	return (
		<div className="page__column ui container">
			<SearchBar />
			<div className="ui grid">
				<div className="ui row">
					<div className="ten wide column">
						{
							// Keep CurrentVideo from rendering before recieving video list
							allVideos.length ? <CurrentVideo /> : <h2>loading...</h2>
						}
					</div>
					<div className="six wide column">
						<VideoList />
					</div>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = state => ({
    allVideos: state.videos.allVideos,
});

export default connect(mapStateToProps, null)(Home);
