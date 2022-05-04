import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideosRequest } from '../thunks/youtubeApi';
import { 
    setSearchTerm, 
    setSearchCount, 
    setSearchSafety 
    } from '../actions/videos';

function SearchBar(props) {
    const { searchTerm, searchCount, searchSafety, setSearchTerm, setSearchCount, setSearchSafety, getVideos, allVideos } = props;
    const videoCountValues = [5, 10, 25, 50]; // Set video count values to loop through later
    const videoSafetyValues = ['moderate', 'none', 'strict']; // Set safety values to loop through later
    const initialSearchTerm = 'deer'; // Set default seach here so search input isn't controlled by it 

    function onFormSubmit(e) {
        e.preventDefault();
        getVideos(searchTerm, searchCount, searchSafety);
    }

    useEffect(() => {
        // Load a list of default videos
        if (!allVideos.length) {
            getVideos(initialSearchTerm, searchCount, searchSafety);
        }
    }, []);

	return (
		<div className="search-bar ui segment">
            <form id="searchForm"  className="ui form" onSubmit={(e) => onFormSubmit(e)}>
                <div className="field">
                    <label>Search</label>
                    <input 
                        type="text" 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <label>videos</label>
                    <select 
                        name="video-count" 
                        value={searchCount} 
                        onChange={(e) => setSearchCount(e.target.value)}
                    >
                    {
                        videoCountValues.map((val) => <option key={val} value={val}>{val}</option> )
                    }
                    </select>
                    <label>Safe Search</label>
                    <select 
                        name="video-safety" 
                        value={searchSafety} 
                        onChange={(e) => setSearchSafety(e.target.value)}
                    >
                    {
                        videoSafetyValues.map((val) => <option key={val} value={val}>{val}</option> )
                    }
                    </select>
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
    allVideos: state.videos.allVideos,
});

const mapDispatchToProps = dispatch => ({
    setSearchTerm: (term) => dispatch(setSearchTerm(term)),
    setSearchCount: (count) => dispatch(setSearchCount(count)),
    setSearchSafety: (safety) => dispatch(setSearchSafety(safety)),
    getVideos: (term, count, safety) => dispatch(getVideosRequest(term, count, safety)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
