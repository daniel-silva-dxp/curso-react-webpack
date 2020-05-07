'user strict';
import React, { Component } from 'react';

class Timer extends Component {
	constructor() {
		super();
		this.state = {
			time: 0
		};
		this.timer;
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({
				time: this.state.time + 1
			});
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		return <h1>Timer: {this.state.time}</h1>;
	}
}

export default Timer;
