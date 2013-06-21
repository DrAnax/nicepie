(function($) {

	$.fn.nicepie = function( options ) {

		// Default settings
		var settings = $.extend({

			// dimension
			radius      : 100,

			// styling
			backcolor    : '#000',
			piecolor     : '#666',
			fontcolor    : '#aaa',
			font         : '20pt Ubuntu italic'
			halign       : 'center',
			valign       : 'middle'
			show_percent : true,

			// numbers
			start        : 100,
			end          : 43,
			step         : -1,

			// other
			interval     : 30,

			complete

		}, options);

		var canvas;

		if (settings.show_percent) {
			settings.start = 100;
			settings.end = Math.max(0, Math.min(100, settings.end));
		}

		return this.each( function() { // chain the method

			// add canvas to element
			this.append('<canvas width="' + settings.radius * 2 + '" height="' + settings.radius * 2 + '"></canvas>');

			// get the canvas
			canvas = this.find('canvas').getContext('2d');

			var current = settings.start;

			// init drawing
			this.draw_background();
			this.draw_text(current);

			// animate
			var anim = setInterval(function() {

				current = this.get_next_number(current);

				this.clear_canvas();
				this.draw_background();

				if (settings.show_percent)
					this.draw_foreground(current);

				this.draw_text(current);

			}, settings.interval);

		});

		// clear the canvas
		function clear_canvas() {
			canvas.clearRect(0, 0, settings.radius * 2, settings.radius * 2);

		}

		// draw a background circle on canvas
		function draw_background() {

			// draw the background circle
			canvas.beginPath();

			canvas.moveTo(settings.radius, settings.radius); // center of circle

			canvas.arc( // draw the circle
				settings.radius, settings.radius, // center of circle
				settings.radius, // radius
				Math.PI, Math.PI * 2, // entire circle
				true // clockwise
				);

			canvas.lineTo(settings.radius, settings.radius); // line back to center

			canvas.closePath();
			canvas.fillStyle = settings.backcolor;
			canvas.fill();

		}

		// draw the foreground
		function draw_foreground(percent) {

			canvas.beginPath();

			canvas.moveTo(settings.radius, settings.radius); // center of arc

			canvas.arc( // draw the arc
				settings.radius, settings.radius, // center of arc
				settings.radius, // radius
				Math.PI * 1.5, // start at the top
        		Math.PI * (1.5 - 2 * (100 - percent) / 100), // move to percent point
        		false // anti-clockwise 
        		);

			canvas.lineTo(settings.radius, settings.radius); // line back to the center

			canvas.closePath();
			canvas.fillStyle = settings.piecolor;
			canvas.fill();

		}

		// draw text on canvas
		function draw_text(number) {

			var text = number_format(number);

			// draw the text
			canvas.font = settings.font;
			canvas.textAlign = settings.halign;
			canvas.textBaseAlign = settings.valign;
			canvas.fillStyle = settings.fontcolor;
			canvas.fillText(text, settings.radius, settings.radius);

		}

		// get the next step number
		function get_next_number(current) {

			// make sure current number does not get bellow / above end number
			current = (settings.step > 0) ? 
				Math.min(current + settings.step, settings.end) :
				Math.max(current + settings.step, settings.end);
			
			return current;

		}

		// add thousand separator to number
		function number_format(number) {

			var sep = ',';
			var text = number.toString() + '';
			var rgx = /(\d+)(\d{3})/;

			while (rgx.test(text)) {
				text =text.replace(rgx, '$1' + sep + '$2');
			}

			return text;

		}

	};

}(jQuery));