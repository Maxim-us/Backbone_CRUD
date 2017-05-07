// start page
window.location.hash = '#listUsers';

// Global vars
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

// Template change
templateChange = function( rout ){

	$( '.mx-app_wrap span' ).removeClass( 'change' );
	$( '.deleteUser' ).remove();
	$( '#addUserForm' ).removeClass( 'visible' );

	if( rout == 'editUser' ){
		$( '.mx-app_wrap span' ).addClass( 'change' );
	} else if(  rout == 'deleteUser' ){
		$( '.changeJob' ).after( '<button class="deleteUser">Delete</button>' );
	} else if( rout == 'addUser' ){
		$( '#addUserForm' ).addClass( 'visible' );
	}
	
}