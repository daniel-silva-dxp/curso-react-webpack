'user stric';
import React from 'react';
import Title from './title';
import MyHeader from './header';
import Square from './square';
import Event from './events';
import Button from './button';
import LikeButton from './like-button';
import SearchButton from './search-button';

const colors = [ '#F27781', '#18298C', '#04BF8A', '#F2CF1D', '#F29F05' ];

// Renderizando componentes utilizando Classes
class App extends React.Component {
	render() {
		return (
			<div className="container">
			/*onClick={(e) => {
					console.log(e.target);
				}}*/
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
