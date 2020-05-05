'user strict';
import React from 'react';
import Button from './button';

const LikeButton = () => {
	return <Button handleClick={(e) => console.log(`${e}: Like`)}>Like</Button>;
};

export default LikeButton;
