'use strict';
import React from 'react';

const Title = ({ name, lastname }) => <h1>Olá {`${name} ${lastname}!`}</h1>;

Title.defaultProps = {
	name: 'undefined',
	lastname: 'undefined'
};

// const Title = React.createClass({
// 	getDefaultProps: function() {
// 		return {
// 			name: 'Desconhecido',
// 			lastname: 'Desconhecido'
// 		};
// 	},
// 	render: function() {
// 		return <h1>My name is: {`${this.props.name} ${this.props.lastname}`}</h1>;
// 	}
// });

export default Title;
