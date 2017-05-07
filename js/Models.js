// Default model
App.Models.User = Backbone.Model.extend( {

	url: 'http://js/Backbone/backbone_CRUD/',

	defaults: {
		name: 	'',
		age: 	'',
		job: 	''
	},

	validation: {

	    name: {
	    	required: true,
	    	msg: 'Нужно ввести имя!'
	    },
	    age: [
	    	{
	    		required: true,
	    		msg: 'Введите возраст!'
	    	},
	    	{		    	
		    	range: [1, 80],
		    	msg: 'Возраст должен быть от 1 до 80 лет!'
		    }
	    ],
	    job: [ 
		    {
		    	required: true,
		    	msg: 'Введите профессию'
		    },
		    {
		    	minLength: 5,
		    	msg: 'Напишите подробнее'
		    }
	    ]
	    
	}

} );