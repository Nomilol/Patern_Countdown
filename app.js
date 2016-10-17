console.log('test');
(function(){
	var app = {
		timer : 500,
		intervalID: null,
		init : function(){
			app.listeners();
		},
		listeners : function(){
			$('#play').on('click', app.start);
			$('#stop').on('click', app.stop);
			$('#reset').on('click', app.reset);
		},
		/*choosenNumber : function(){
			var timeChoose = parseInt($('#choose').val(),10);
			timeChoose = timer; 
			
		}, */
		start : function(){
			app.timer;
			app.intervalID = setInterval(app.decrement, 1000);
		},
		stop : function(){
			clearInterval(app.intervalID);
		},
		reset : function(){
			app.timer;
			app.start;
		},
		decrement : function(){
			app.timer --;
			app.updateView();
		},
		updateView : function(){
			var minutes = parseInt(app.timer / 60, 10);
			var secondes = parseInt(app.timer - minutes * 60, 10);
			$('#minutes').text(minutes);
			$('#secondes').text(secondes);
		}

	}

	app.init();
})();



