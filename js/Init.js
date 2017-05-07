( function(){

	var $form = $( '#addUserForm' );

	// Model
	var modelUser = new App.Models.User;

	// Collection
	var collectionUsers = new App.Collections.Users( [

		{
			name: 'Василий',
			age: 27,
			job: 'Слесарь'
		},
		{
			name: 'Петр',
			age: 25,
			job: 'Монтажник'
		},
		{
			name: 'Александр',
			age: 18,
			job: 'Студент'
		}

	] );

	// Router
	var childRouter = App.Router.extend( {

		start: function(){
			
			$( '.mx-app_info' ).empty();
			$( '.mx-app_info' ).append( $( '<h1>Список пользователей</h1>' ) );

			// Change template
			templateChange( Backbone.history.getFragment() );

		},

		editPage: function(){
			
			$( '.mx-app_info' ).empty();
			$( '.mx-app_info' ).append( $( '<h1>Редактирование данных пользователей</h1>' ) );
			$( '.mx-app_info' ).append( $( '<h3>Кликните по строке, которую нужно изменить</h3>' ) );
			$( '.mx-app_info' ).append( $( '<span class="editError hidden"></span>' ) );

			// Change template
			templateChange( Backbone.history.getFragment() );

		},

		addPage: function(){

			$( '.mx-app_info' ).empty();
			$( '.mx-app_info' ).append( $( '<h1>Добавление пользователя</h1>' ) );

			// Change template
			templateChange( Backbone.history.getFragment() );

		},

		deletePage: function(){

			$( '.mx-app_info' ).empty();
			$( '.mx-app_info' ).append( $( '<h1>Удаление пользователя</h1>' ) );

			// Change template
			templateChange( Backbone.history.getFragment() );

		}

	} );

	// Router
	var locationHash = new childRouter;
	Backbone.history.start();

	// view add form
	var addUser = new App.Views.AddUser( {
		collection: collectionUsers
	} );

	var viewUsers = new App.Views.Users( { collection: collectionUsers } );
	$( '.mx-app_wrap' ).append( viewUsers.render().el );

} )();