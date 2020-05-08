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

	componentWillReceiveProps(nextProps) {
		console.log('componentWillReceiveProps', this.props, nextProps);
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate', this.props, nextProps);
		return this.state.time !== nextState.time;
	}

	render() {
		return <h1>Timer: {this.state.time}</h1>;
	}
}

export default Timer;
