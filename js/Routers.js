App.Router = Backbone.Router.extend( {

	routes: {
		'listUsers'		: 'start',
		'editUser'		: 'editPage',
		'addUser'		: 'addPage',
		'deleteUser'	: 'deletePage'
	}

} );