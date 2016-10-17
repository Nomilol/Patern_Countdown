console.log('test');
(function(){
	var app = {
		timer : null,
		intervalID: null,
		init : function(){
			app.listeners();
		},
		listeners : function(){
			$('#play').on('click', app.start);
			$('#stop').on('click', app.stop);
			$('#reset').on('click', app.reset);
		},
		choosenNumber : function(){
			app.timer = parseInt($('#choose').val(),10);
			
		}, 
		start : function(){
			app.choosenNumber();
			app.intervalID = setInterval(app.decrement, 1000);
		},
		stop : function(){
			clearInterval(app.intervalID);
		},
		reset : function(){
			app.choosenNumber();
			app.start;
		},
		decrement : function(){
			app.timer --;
			app.updateView();
		},
		updateView : function(){
			var minutes = parseInt(app.timer / 60, 10);
			var secondes = app.timer - minutes * 60;
			$('#minutes').text(minutes);
			$('#secondes').text(secondes);
		}

	} 

	app.init();
})();



