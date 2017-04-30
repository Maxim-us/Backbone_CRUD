window.App = {
	Models: 		{},
	Views: 			{},
	Collections: 	{},
	Routers: 		{}
};

// Helper template
templateHelper = function( id ){
	return _.template( $( '#' + id ).html() );
}