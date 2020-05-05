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
				margin: '5px 1px'
			}}
		/>
	);
};

export default Square;
