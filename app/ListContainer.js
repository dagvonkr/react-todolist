// List Container er parenten

var React = require('react');
var AddItem = require('./AddItem'); // her får parenten en child
var List = require('./List');	// her får parenten en child

var ListContainer = React.createClass({
	getInitialState: function() {
		return {
			list: []
		}
	},

	handleAddItem: function(newItem) {
		this.setState({
			list: this.state.list.concat([newItem]) // you dont push to an array
		})
	},

	handleRemoveItem: function(index) {
		var newList = this.state.list;
		newList.splice(index, 1);
		this.setState({
			list: newList
		})
	},

	render: function() {
		return (
			<div className="col-sm-6 col-md-offset-3">
				<div className="col-sm-12">
					<h3 className="text-center"> To Do List </h3>
					<AddItem add={this.handleAddItem}/>
					<List items={this.state.list} remove={this.handleRemoveItem}/>
				</div>
			</div>		
		)
	}
});

module.exports = ListContainer;