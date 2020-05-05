'user strict';
import React from 'react';

const Event = ({ color }) => {
	return (
		<div
			style={{
				background: color,
				width: '150px',
				height: '50px',
				cursor: 'pointer'
			}}
		/>
	);
};

Event.defaultProps = {
	color: '#18298C'
};

export default Event;
