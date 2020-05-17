'user stric';
import React from 'react';
import Button from './button';

// Renderizando componentes utilizando Classes
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			checked: false,
			showDiv: false
		};
	}
	render() {
		return (
			<div className="container">
				<label>
					<input
						type="checkbox"
						checked={this.state.checked}
						onChange={() => {
							this.setState(
								{
									checked: !this.state.checked
								},
								() => {
									this.setState({
										showDiv: this.state.checked
									});
								}
							);
						}}
					/>{' '}
					Checkbox
				</label>
				{this.state.showDiv && <div>Olha eu aqui!</div>}
			</div>
		);
	}
}

export default App;
