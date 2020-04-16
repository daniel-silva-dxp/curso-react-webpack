'user stric';
import React from 'react';

const Title = React.createClass({
	render: function() {
		return <h1>MRW#7 - JSX no Babel</h1>;
		//return React.createElement('h1', null, 'MRW#5');
	}
});

export default Title;
