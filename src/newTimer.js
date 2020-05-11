'user strict';
import React, { Component } from 'react';

class NewTimer extends Component {
	constructor() {
		super();
		this.state = {
			newTime: 0
		};
		this.timer;
	}

	componentDidMount() {
		// this.timer = setInterval(() => {
		// 	this.setState({ newTime: this.state.newTime + 1 });
		// }, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		return <h1>NEW TIMER: {this.state.newTime}</h1>;
	}
}

export default NewTimer;
