import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

function Home() {
	return (
		<div>
			<div>
				<SearchBar />
				<VideoList />
			</div>
			<h1>App is running!</h1>
		</div>
	);
}

export default Home;
