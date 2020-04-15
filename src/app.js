'user stric';
const React = require('react');

const Title = React.createClass({
	render: function() {
		// return <h1>MRW#5</h1>;
		return React.createElement('h1', null, 'MRW#5');
	}
});

module.exports = Title;
