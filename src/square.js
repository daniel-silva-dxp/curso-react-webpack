'user strict';
import React from 'react';

const Square = ({ color }) => {
	return (
		<span
			style={{
				display: 'inline-block',
				background: color,
				width: '50px',
				height: '50px',
				margin: '10px'
			}}
		/>
	);
};

export default Square;
