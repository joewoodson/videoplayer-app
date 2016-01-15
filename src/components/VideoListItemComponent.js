'use strict';

import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

require('styles/VideoListItem.sass');
require('bootstrap/dist/css/bootstrap.css');

const VideoListItemComponent = ({video}) => {
	console.log(video);

	return (
		// <li>Video</li>
		<Row>
				<Col lg={4} className="purple">Left Side</Col>
				<Col lg={8} className='yellow'>Right Side</Col>
		</Row>
	)
}

VideoListItemComponent.displayName = 'VideoListItemComponent';

export default VideoListItemComponent;
