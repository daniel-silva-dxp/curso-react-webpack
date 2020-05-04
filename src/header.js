'user stric';
import React from 'react';

const MyHeader = ({ color }) => {
	return (
		<div
			style={{
				background: color,
				height: '100px',
				width: '100%'
			}}
		/>
	);
};

export default MyHeader;
