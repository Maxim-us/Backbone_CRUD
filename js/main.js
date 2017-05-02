// start page
window.location.href = 'index.html#listUsers';

window.App = {
	Models: 		{},
	Views: 			{},
	Collections: 	{},
	Router: 		{}
};

// Helper template
templateHelper = function( id ){
	return _.template( $( '#' + id ).html() );
}

// Helper Router view
helperRouterView = function( templateViewID, modelView, collectionView ){

	// View user
	var extendViewUser = App.Views.User.extend( {

		template: templateHelper( templateViewID )

	} );

	// View collection
	var extendViewUsers = App.Views.Users.extend( {

		model: modelView,
		collection: collectionView,

		addUser: function( model ){
			var viewUser = new extendViewUser( { model: model } );
			this.$el.append( viewUser.render().el );
		}

	} );

	var viewUsers = new extendViewUsers;

	// Append result
	$( '.mx-app_wrap' ).append( viewUsers.render().el );

}