'use strict';

import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Col from 'react-bootstrap/lib/Col';
import Image from 'react-bootstrap/lib/Image';

require('styles/VideoListItem.sass');
require('bootstrap/dist/css/bootstrap.css');

const VideoListItemComponent = ({video, onVideoSelect}) => {
	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		<Col onClick={() => onVideoSelect(video)} className='video-listing' sm={4}>
			<Panel>
				<div>
				 <Col md={5}>
				 	<Image src={imageUrl} thumbnail />
				 </Col>

				 <Col md={7}>
				 	<div className='video-list-title'>{video.snippet.title}</div>
				 </Col>
				</div>
			</Panel>
		</Col>
	)
}

VideoListItemComponent.displayName = 'VideoListItemComponent';

export default VideoListItemComponent;
