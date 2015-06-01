var React = require('react');

var ListContainer = require('./ListContainer');

var App = React.createClass({
	// må ha en render component
	render: function(){
		return (
			<div className="container">
				<div className="row">
					<ListContainer />
				</div>
			</div>
		)
	}
})

// rendrer det første DOM objectet

React.render(
	<App />,
	document.getElementById('app') // app refererer til div=app
)