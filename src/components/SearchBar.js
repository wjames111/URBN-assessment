import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideosRequest } from '../thunks/youtubeApi';
import { setSearchTerm, setSearchCount, setSearchSafety } from '../actions/videos';

function SearchBar({ searchTerm, searchCount, searchSafety, isLoading, updateSearchTerm, updateSearchCount, updateSearchSafety, getVideos, allVideos }) {
    const videoCountValues = [5, 10, 25, 50];
    const videoSafetyValues = ['moderate', 'none', 'strict'];
    const initialSearchTerm = 'deer';

    function onFormSubmit(e) {
        e.preventDefault();
        getVideos(searchTerm, searchCount, searchSafety);
    }

    useEffect(() => {
        if (!allVideos.length) {
            getVideos(searchTerm = initialSearchTerm, searchCount, searchSafety);
        }
    }, []);

	return (
		<div className="search-bar ui segment">
            <form id="searchForm"  className="ui form" onSubmit={(e) => onFormSubmit(e)}>
                <div className="field">
                    <label>Video Search</label>
                    <input 
                        type="text" 
                        value={searchTerm} 
                        onChange={(e) => updateSearchTerm(e.target.value)}
                    />
                    <label>Number of Videos</label>
                    <select name="video-count" value={searchCount} onChange={(e) => updateSearchCount(e.target.value)}>
                    {
                        videoCountValues.map((val) => <option key={val} value={val}>{val}</option> )
                    }
                    </select>
                    <select name="video-safety" value={searchSafety} onChange={(e) => updateSearchSafety(e.target.value)}>
                    {
                        videoSafetyValues.map((val) => <option key={val} value={val}>{val}</option> )
                    }
                    </select>
                    <h1>{ isLoading ? 'Loading' : searchTerm }</h1>
                    <h1>{  searchCount }</h1>
                    <h1>{  searchSafety }</h1>
                </div>
            </form>
            <button type="submit" form="searchForm" value="Submit">Submit</button>
        </div>
	);
}

const mapStateToProps = state => ({
	searchTerm: state.videos.searchTerm,
    searchCount: state.videos.searchCount,
    searchSafety: state.videos.searchSafety,
    isLoading: state.videos.isLoading,
    allVideos: state.videos.allVideos,
});

const mapDispatchToProps = dispatch => ({
    updateSearchTerm: (term) => dispatch(setSearchTerm(term)),
    updateSearchCount: (count) => dispatch(setSearchCount(count)),
    updateSearchSafety: (safety) => dispatch(setSearchSafety(safety)),
    getVideos: (term, count, safety) => dispatch(getVideosRequest(term, count, safety)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
