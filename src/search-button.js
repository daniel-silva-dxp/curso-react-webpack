'user strict';
import React from 'react';
import Button from './button';

const SearchButton = () => {
	return <Button handleClick={(e) => console.log(`${e}: Search`)}>Search</Button>;
};

export default SearchButton;
