'user stric';
import React from 'react';
import Button from './button';

// Renderizando componentes utilizando Classes
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			value: '2',
			checked: false
		};
	}
	render() {
		return (
			<div className="container">
				<form>
					<select
						value={this.state.value}
						onChange={(e) => {
							this.setState({
								value: e.target.value
							});
						}}
					>
						<option value="1">Value I</option>
						<option value="2">Value II</option>
						<option value="3">Value III</option>
					</select>
				</form>
			</div>
		);
	}
}

export default App;
