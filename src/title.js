'use strict';
import React from 'react';

const Title = React.createClass({
	getDefaultProps: function() {
		return {
			name: 'Desconhecido',
			lastname: 'Desconhecido'
		};
	},
	render: function() {
		return <h1>My name is: {`${this.props.name} ${this.props.lastname}`}</h1>;
	}
});

export default Title;
