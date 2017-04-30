// Default model
App.Models.User = Backbone.Model.extend( {

	url: 'http://js/Backbone/my_first_backbone_app/',

	defaults: {
		name: 	'',
		age: 	'',
		job: 	''
	},

	validate: function( arrgs, options ){
		if( ( ! $.trim( arrgs.name ) ) || ( ! $.trim( arrgs.age ) ) || ( ! $.trim( arrgs.job ) )  ){			
			if( ! $.trim( arrgs.name )  ){
				console.log( 'Empty name' );
			}
			if( ! $.trim( arrgs.age )  ){
				console.log( 'Empty age' );
			}
			if( ! $.trim( arrgs.job )  ){
				console.log( 'Empty job' );
			}
			return 'Empty fields';
		}
	}

} );