// Вид для вывода одного пользователя
App.Views.User = Backbone.View.extend( {

	initialize: function(){
		this.model.on( 'invalid', function( model, error ){
			alert( error );
		} );
	},

	tagName: 'li',

	template: templateHelper( 'templateUsers' ),

	render: function(){
		this.$el.append( this.template( this.model.toJSON() ) );
		return this;
	},

	events: {
		'click .changeName': 'changeName',
		'click .changeAge' : 'changeAge',
		'click .changeJob' : 'changeJob',

		'blur .changeName' : 'saveChangeName',
		'blur .changeAge'  : 'saveChangeAge',
		'blur .changeJob'  : 'saveChangeJob',

		'click #deleteUser': 'deleteUser'
	},

	changeName: function( e ){
		$( e.target ).attr( 'contenteditable', 'true' );
	},
	changeAge: function( e ){
		$( e.target ).attr( 'contenteditable', 'true' );
	},
	changeJob: function( e ){
		$( e.target ).attr( 'contenteditable', 'true' );		
	},

	saveChangeName: function( e ){
		
		this.model.set( { 'name': $( e.target ).text() }, { 'validate': true } );
		console.log( this.model );
		
		$( e.target ).text( this.model.get( 'name' ) );
		
	},
	saveChangeAge: function( e ){
		this.model.set( { 'age': $( e.target ).text() }, { 'validate': true } );
		console.log( this.model );

		$( e.target ).text( this.model.get( 'age' ) );

	},
	saveChangeJob: function( e ){
		
		this.model.set( { 'job': $( e.target ).text() }, { 'validate': true } );
		console.log( this.model );

		$( e.target ).text( this.model.get( 'job' ) );

	},

	deleteUser: function(){

	}

} );

// Вид для вывода всех пользователей
App.Views.Users = Backbone.View.extend( {

	initialize: function(){
		this.collection.on( 'add', this.addUser, this );
	},

	tagName: 'ul',

	render: function(){				
		this.collection.each( this.addUser, this );
		return this;
	},

	addUser: function( modelUser ){
		var viewUser = new App.Views.User( { model: modelUser } );
		this.$el.append( viewUser.render().el );
	}

} );

// Вид формы добавления ползователя
App.Views.AddUser = Backbone.View.extend( {

	initialize: function(){
	},

	el: '#addUser',

	events: {
		'submit': 'submit'
	},

	submit: function( e ){

		e.preventDefault();
		
		var newUseName = $( e.currentTarget ).find( '#userName' ).val();
		var newUseAge = $( e.currentTarget ).find( '#userAge' ).val();
		var newUseJob = $( e.currentTarget ).find( '#userJob' ).val();

		var newUser = new App.Models.User();

		var errorMes = '';
		newUser.on( 'invalid', function( model, error ){
			errorMes = error;
		} );		

		newUser.set( {
			name: 	newUseName,
			age: 	newUseAge,
			job: 	newUseJob
		}, { validate: true } );


		if( !errorMes ){

			this.collection.add( newUser );		
			//console.log( this.collection.length );

		}


		

	}

} );