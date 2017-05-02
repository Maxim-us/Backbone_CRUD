( function(){

	var $form = $( '#addUser' );

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
			
			$( '.mx-app_wrap' ).empty();
			$( '.mx-app_wrap' ).append( $( '<h1>Список пользователей</h1>' ) );

			// view for start page
			helperRouterView( 'templateListUsers', modelUser, collectionUsers );

		},

		editPage: function(){
			
			$( '.mx-app_wrap' ).empty();
			$( '.mx-app_wrap' ).append( $( '<h1>Редактирование данных пользователей</h1>' ) );
			$( '.mx-app_wrap' ).append( $( '<h3>Кликните по строке, которую нужно изменить</h3>' ) );

			// view for edit page
			helperRouterView( 'templateEditUsers', modelUser, collectionUsers );

		},

		addPage: function(){

			$( '.mx-app_wrap' ).empty();
			$( '.mx-app_wrap' ).append( $( '<h1>Добавить пользователя</h1>' ) );
			$( '.mx-app_wrap' ).append( $( $form ) );

			// view add form
			var addUser = new App.Views.AddUser( {
				collection: collectionUsers
			} );

			// view for delete page
			helperRouterView( 'templateAddUsers', modelUser, collectionUsers );	
		},

		deletePage: function(){

			$( '.mx-app_wrap' ).empty();
			$( '.mx-app_wrap' ).append( $( '<h1>Удаление пользователя</h1>' ) );

			// view for delete page
			helperRouterView( 'templateDeleteUsers', modelUser, collectionUsers );	
		}

	} );

	// Router
	new childRouter;
	Backbone.history.start();

} )();