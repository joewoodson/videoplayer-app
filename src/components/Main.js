require('normalize.css');
require('styles/App.css');

import React from 'react';
import YTSearch from 'youtube-api-search';
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

		this.videoSearch('surfboard');

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
		return (
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}
}

export default AppComponent;
