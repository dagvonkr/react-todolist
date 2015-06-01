var React = require('react');


var AddItem = React.createClass({
	// render: function() {
		getInitialState: function() {
			return {
				// value of the new Item is an empty string
				newItem: ''
			}
		},
		// e is whatever you'll type in the input box
		handleChange: function(e) {
			this.setState({
				newItem: e.target.value
			})
		},
		handleSubmit: function(e) {
			// 13 is ENTER
			if (e.keyCode === 13) {
				// props is what comes from the parent
				this.props.add(this.state.newItem);
				this.setState({
					newItem: ''
				})
			}
		},

		render: function() {
			return (
			<div>
				<input type="text"
					className="form-controll" // bootstrap
					value={this.state.newItem}
					placeholder="New Item"
					onKeyDown={this.handleSubmit}
					onChange={this.handleChange} />
			</div>	
			)	
		}
	// }
});

module.exports = AddItem;