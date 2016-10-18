console.log('test');
(function(){
	
	var app = {
		timer : null,
		intervalID: null,
		init : function(){
			var self = this ;
			app.listeners();
		},
		listeners : function(){
			$('#playButton').on('click', this.start.bind(this));
			$('#stopButton').on('click', this.stop.bind(this));
			$('#resetButton').on('click', this.reset.bind(this));
			//console.log(this);
		},
		choosenNumber : function(){
			this.timer = parseInt($('#choose').val(),10);
			//console.log(this);
			
		}, 
		start : function(){
			this.choosenNumber();
			this.intervalID = setInterval(this.decrement.bind(this), 1000);
		},
		stop : function(){
			clearInterval(this.intervalID);
			
		},
		reset : function(){
			this.stop();
			this.choosenNumber();
			this.start();
		},
		decrement : function(){
			this.timer --;
			this.updateView();
			this.progressBar();
			if(this.timer === 0){
				clearInterval(this.intervalID);
			}
		},
		updateView : function(){
			var minutes = parseInt(app.timer / 60, 10);
			var secondes = this.timer - minutes * 60;
			$('#minutes').text(minutes);
			$('#secondes').text(secondes);
			

		},
		progressBar : function(){
			var input = $('#choose').val();
			var temps = this.timer*100/input;
			$('.progress').css('width', temps + '%');
			
			 
			
		}
		

	} 

	app.init();
})();







