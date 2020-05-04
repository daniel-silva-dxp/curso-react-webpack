'user stric';
import React from 'react';
import Title from './title';

const App = React.createClass({
	render: function() {
		return (
			<div className="container">
				<Title name="Daniel" lastname="Silva" />
			</div>
		);
	}
});

export default App;
