require('normalize.css');
require('styles/App.css');

import React from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './SearchBarComponent';
import VideoList from './VideoListComponent';
import VideoDetail from './VideoDetailComponent';

const API_KEY = 'AIzaSyA29UTsxJz3zxAlLQE1mLcZDvBOhLwI-pk';

class AppComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('scuba diving');

	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 200);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}
}

export default AppComponent;
