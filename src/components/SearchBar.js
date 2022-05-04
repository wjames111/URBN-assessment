import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getVideosRequest } from '../thunks/youtubeApi';
import { setSearchTerm, setSearchCount } from '../actions/videos';

function SearchBar({ searchTerm, searchCount, isLoading, getVideos, updateSearchTerm, updateSearchCount }) {
    const videoCount = [5, 10, 25, 50];

    function onFormSubmit(e) {
        e.preventDefault();
        getVideos(searchTerm, searchCount);
    }

	return (
		<div>
            <form id="searchForm" onSubmit={(e) => onFormSubmit(e)}>
                <div>
                    <label>Video Search</label>
                    <input 
                        type="text" 
                        value={searchTerm} 
                        onChange={(e) => updateSearchTerm(e.target.value)}
                    />
                    <label>Number of Videos</label>
                    <select name="video-count" value={searchCount} onChange={(e) => updateSearchCount(e.target.value)}>
                    {
                        videoCount.map((count) => <option value={count}>{count}</option> )
                    }
                    </select>
                    <h1>{ isLoading ? 'Loading' : searchTerm }</h1>
                    <h1>{  searchCount }</h1>
                </div>
            </form>
            <button type="submit" form="searchForm" value="Submit">Submit</button>
        </div>
	);
}

const mapStateToProps = state => ({
	searchTerm: state.videos.searchTerm,
    searchCount: state.videos.searchCount,
    isLoading: state.videos.isLoading,
});

const mapDispatchToProps = dispatch => ({
    updateSearchTerm: (term) => dispatch(setSearchTerm(term)),
    updateSearchCount: (count) => dispatch(setSearchCount(count)),
    getVideos: (term, count) => dispatch(getVideosRequest(term, count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
