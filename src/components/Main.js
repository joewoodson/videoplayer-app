require('normalize.css');
require('styles/App.css');

import React from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './SearchBarComponent';
import VideoList from './VideoListComponent';

const API_KEY = 'AIzaSyA29UTsxJz3zxAlLQE1mLcZDvBOhLwI-pk';

class AppComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });
		});
	}
	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

export default AppComponent;
