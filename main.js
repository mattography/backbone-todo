//Todo Model
var Todo = Backbone.Model.extend({
	//todo attributes
	defaults: {
		title: '',
		completed: false
	}
});

var myTodo = new Todo({
	title: 'Check attributes property of the logged models in the console.'
});

var TodoView = Backbone.View.extend({

	tagName: 'li',

	todoTpl: _.template( $('#item-template').html() ),

	events: {
		'dblclick label': 'edit',
		'keypress .edit': 'updateOnEnter',
		'blur .edit': 'close'
	},

	//called when view is first created
	initialize: function() {
		this.$el = $('#todo');
	},

	//render titles of todo items
	render: function() {
		this.$el.html( this.todoTpl( this.model.toJSON() ) );
		this.input = this.$('.edit');
		return this;
	},

	//executed when todo label is double clicked
	edit: function() {
	},

	close: function() {
	},

	updateOnEnter: function( e ) {
	}
});

//create view for a todo item
var todoView = new TodoView({model: myTodo});