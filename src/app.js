'user stric';
import React from 'react';
import Button from './button';

const colors = [ '#F27781', '#18298C', '#04BF8A', '#F2CF1D', '#F29F05' ];

// Renderizando componentes utilizando Classes
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			text: 'Daniel',
			color: 'yellow',
			showTimer: true,
			time: 0
		};
	}
	render() {
		return (
			<div className="container">
				<Button handleClick={() => console.log('CLICK')}>CLICK</Button>
			</div>
		);
	}
}

export default App;
