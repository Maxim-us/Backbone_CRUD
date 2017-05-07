// View User
App.Views.User = Backbone.View.extend( {

	initialize: function(){

		this.model.on( 'destroy', function(){
			this.$el.remove();
		}, this );

		Backbone.Validation.bind( this, {

	    	model: this.model,

	    	valid: function( view, attr ){
		    	
		    	var el = view.$( '.' + attr );
		    	el.css( 'color', '' );
		    	
		    },
		    invalid: function( view, attr, error ){

		    	var el = view.$( '.' + attr );
		    	el.css( 'color', 'red' );
		    	
		    	$( 'body .editError' ).text( error );
		    	$( 'body .editError' ).removeClass( 'hidden' );
		    	//console.log( error );

		    	setTimeout( function(){
		    		$( 'body .editError' ).addClass( 'hidden' );
		    		el.css( 'color', '' );
		    	},2000 );

		    }

	    } );
	},

	tagName: 'li',

	template: templateHelper( 'templateListUsers' ),

	render: function(){

		this.$el.append( this.template( this.model.toJSON() ) );
		return this;

	},

	events: {

		'click .change'		: 'change',

		'blur .changeName'	: 'saveChangeName',
		'blur .changeAge'	: 'saveChangeAge',
		'blur .changeJob'	: 'saveChangeJob',

		'click .deleteUser'	: 'deleteUser'

	},

	change: function( e ){

		$( e.target ).attr( 'contenteditable', 'true' );

	},

	saveChangeName: function( e ){
		
		this.model.set( { name: $( e.target ).text() }, { 'validate': true } );
		//console.log( this.model );
		
		$( e.target ).text( this.model.get( 'name' ) );
		
	},
	saveChangeAge: function( e ){

		this.model.set( { 'age': $( e.target ).text() }, { 'validate': true } );
		//console.log( this.model );

		$( e.target ).text( this.model.get( 'age' ) );

	},
	saveChangeJob: function( e ){
		
		this.model.set( { 'job': $( e.target ).text() }, { 'validate': true } );
		//console.log( this.model );

		$( e.target ).text( this.model.get( 'job' ) );

	},

	deleteUser: function(){

		this.model.destroy();

	}

} );

// View Users
App.Views.Users = Backbone.View.extend( {

	initialize: function(){

		this.collection.on( 'add', this.addUser, this );

	},

	tagName: 'ul',

	render: function(){

		this.collection.each( this.addUser, this );
		return this;

	},

	addUser: function( model ){

		var viewUser = new App.Views.User( { model: model } );
		this.$el.append( viewUser.render().el );

	}

} );

// Add User Form
App.Views.AddUser = Backbone.View.extend( {

	el: '#addUserForm',

	events: {

		'submit': 'submit'

	},

	submit: function( e ){

		e.preventDefault();		

		var newUserModel = new App.Models.User;

		// ** validate
		Backbone.Validation.bind( this, {

	    	model: newUserModel,

	    	valid: function( view, attr ){

		    	var el = view.$( '[name=' + attr + ']' ),
		    		errorMsgEl = el.next( '.help-block' );

		    	el.attr( 'style', '' );
		    	errorMsgEl.text( '' ).addClass( 'hidden' );

		    },
		    invalid: function( view, attr, error ){

		    	//console.log( attr );
		    	var el = view.$( '[name=' + attr + ']' ),
		    		errorMsgEl = el.next( '.help-block' );

		    	el.css( 'border', '1px solid red' );
		    	errorMsgEl.text( error ).removeClass( 'hidden' );

		    }

	    } );

		var newUseName 	= $( e.currentTarget ).find( '#name' ).val(),
			newUseAge 	= $( e.currentTarget ).find( '#age' ).val(),
			newUseJob 	= $( e.currentTarget ).find( '#job' ).val();

		newUserModel.set( {
		 	name: 	newUseName,
		 	age: 	newUseAge,
		 	job: 	newUseJob
		 }, { validate: true } );

		var isValid = newUserModel.isValid();
		//console.log(isValid);		

		if( isValid ){

			this.collection.add( newUserModel );		
			//console.log( this.collection.length );
			this.$el.trigger( 'reset' );		

		};

	}

} );