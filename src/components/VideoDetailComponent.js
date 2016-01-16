'use strict';

import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import ResponsiveEmbed from 'react-bootstrap/lib/ResponsiveEmbed';

require('styles/VideoDetail.sass');

const VideoDetailComponent = ({video}) => {
	if(!video) {
		return <Col sm={8}>Loading...</Col>;
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

  return (
  	<Col sm={8}>
  		<ResponsiveEmbed a16by9>
  			<iframe src={url} />
  		</ResponsiveEmbed>
  		<div className='details'>
  			<div className='video-title'>{video.snippet.title}</div>
  			<div className='video-desc'>{video.snippet.description}</div>
  		</div>
  	</Col>
  )

};

VideoDetailComponent.displayName = 'VideoDetailComponent';

export default VideoDetailComponent;
