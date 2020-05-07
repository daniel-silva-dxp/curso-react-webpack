'user stric';
import React from 'react';
import Title from './title';
import MyHeader from './header';
import Square from './square';
import Event from './events';
import Button from './button';
import LikeButton from './like-button';
import SearchButton from './search-button';
import EnterButton from './enter-button';
import MyApp from './states';
import Timer from './timer';

const colors = [ '#F27781', '#18298C', '#04BF8A', '#F2CF1D', '#F29F05' ];

// Renderizando componentes utilizando Classes
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			text: 'Daniel',
			color: 'yellow',
			showTimer: true
		};
	}
	render() {
		return (
			<div className="container">
				{[ 'red', 'green', 'blue' ].map((color) => <MyHeader key={color} color={color} />)}
				<Title name="Daniel" lastname="Silva" />
				{colors.map((color) => {
					return <Square key={color} color={color} />;
				})}
				<h1>Eventos</h1>
				<Event />
				<h1>Prop children</h1>
				{colors.map((color, index) => {
					return <Button key={index}>{color}</Button>;
				})}
				<h1>Composição</h1>
				<LikeButton />
				<SearchButton />
				<EnterButton />
				<h1 onClick={() => this.setState({ text: 'Daniel Silva' })}>State</h1>
				{this.state.text}
				<h1>Statefull e Stateless</h1>
				<Square color={this.state.color} />
				<div>
					{colors.map((color, index) => (
						<Button key={index} handleClick={() => this.setState({ color })}>
							{color}
						</Button>
					))}
				</div>
				<MyApp />
				{this.state.showTimer && <Timer />}
				<button onClick={() => this.setState({ showTimer: !this.state.showTimer })}>Show / Hide timer</button>
			</div>
		);
	}
}

// const App = React.createClass({
// 	render: function() {
// 		return (
// 			<div className="container">
// 				<Title name="Daniel" lastname="Silva" />
// 			</div>
// 		);
// 	}
// });

export default App;
