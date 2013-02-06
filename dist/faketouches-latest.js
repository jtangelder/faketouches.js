/*! faketouches.js - v0.0.1 - 2013-02-06
 * Copyright (c) 2013 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */

(function(window) {
	'use strict';


	function FakeTouches(element) {
		this.element = element;

		this.touches = [];
	}


	/**
	 * insert touches by xy per touch
	 * [ [x,y], [x,y] ]
	 * @param {Array} touches
	 */
	FakeTouches.prototype.setTouches = function(touches) {
		this.touches = touches;
	};


	FakeTouches.prototype.start = function() {
		this.triggerEvent('touchstart', this.touches);
	};

	/**
	 * move touches to new positions. all with x ammount, or per touch
	 * @param  {Mixed}	dx		When dx is an array, each touch can be updated
	 * @param  {Number} [dy]
	 */
	FakeTouches.prototype.moveBy = function(dx, dy) {
		// each touch must be updated
		if(typeof dx == 'object') {
			var delta_touches = dx;
			this.touches.forEach(function(val, i) {
				this.touches[i][0] += delta_touches[i][0];
				this.touches[i][1] += delta_touches[i][1];
			});
		}
		// add dx,dy to all touches
		else {
			this.touches.forEach(function(val, i) {
				this.touches[i][0] += dx;
				this.touches[i][1] += dy;
			});
		}

		return this.touches;
	};

	FakeTouches.prototype.end = function() {
		this.triggerEvent('touchend', this.touches);
	};

	FakeTouches.prototype.cancel = function() {
		this.triggerEvent('touchcancel', this.touches);
	};


	FakeTouches.prototype.triggerEvent = function(name, touches) {
		var event = document.createEvent('Event');
		event.initEvent(name, true, true);
		event.touches = touches;
		return this.element.dispatchEvent(event);
	};

	window.FakeTouches = FakeTouches;
})(window);