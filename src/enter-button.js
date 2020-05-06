'user strict';
import React from 'react';
import Button from './button';

const EnterButton = () => {
	return <Button handleClick={(e) => console.log(`${e}: Enter`)}>Enter</Button>;
};

export default EnterButton;
