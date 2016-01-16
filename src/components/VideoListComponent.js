'use strict';

import React from 'react';
import uniqid from 'uniqid';
import VideoListItem from './VideoListItemComponent';

require('styles/VideoList.sass');

const VideoListComponent = (props) => {
	const videoItems = props.videos.map((video) => {
		return <VideoListItem key={uniqid()} video={video} onVideoSelect={props.onVideoSelect} />
	})

	return (
		<ul>
			{videoItems};
		</ul>
	);
}

VideoListComponent.displayName = 'VideoListComponent';
 
export default VideoListComponent;
