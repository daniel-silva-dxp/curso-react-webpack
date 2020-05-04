'user stric';
import React from 'react';
import Title from './title';
import MyHeader from './header';

// Renderizando componentes utilizando Classes
class App extends React.Component {
	render() {
		return (
			<div className="container">
				{[ 'red', 'green', 'blue' ].map((color) => <MyHeader key={color} color={color} />)}
				<Title name="Daniel" lastname="Silva" />
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
