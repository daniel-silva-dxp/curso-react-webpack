'user stric';
import React from 'react';
import Button from './button';

// Renderizando componentes utilizando Classes
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			value: 'Valor inicial',
			checked: false
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
					<label>
						<input type='checkbox' 
							checked={this.state.checked}
							onChange={(e) => this.setState({checked: e.target.checked})}
						/>
						CHECKBOX
					</label>
					<input type='radio' name='rd' value='1' /> Radio I
					<input type='radio' name='rd' value='2' /> Radio II
				</form>
				<div>{this.state.value}</div>
			</div>
		);
	}
}

export default App;
