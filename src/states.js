'user strict';
import React from 'react';
import Button from './button';
import Square from './square';

class MyApp extends React.Component {
	constructor() {
		super();
		this.state = {
			color: 'yellow'
		};
	}

	render() {
		return (
			<div>
				<Square color={this.state.color} />
				{[ 'red', 'green', 'blue' ].map((color) => (
					<Button key={color} handleClick={() => this.setState({ color })}>
						{color}
					</Button>
				))}
			</div>
		);
	}
}

export default MyApp;
