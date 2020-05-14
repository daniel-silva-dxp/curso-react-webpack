'user stric';
import React from 'react';
import Button from './button';

const colors = [ '#F27781', '#18298C', '#04BF8A', '#F2CF1D', '#F29F05' ];

// Renderizando componentes utilizando Classes
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			value: 'Valor inicial'
		};
	}
	render() {
		return (
			<div className="container">
				<form>
					<input
						type="text"
						value={this.state.value}
						onChange={(e) => {
							console.log(e.nativeEvent);
							this.setState({
								value: e.target.value
							});
						}}
					/>
				</form>
				<div>{this.state.value}</div>
			</div>
		);
	}
}

export default App;
