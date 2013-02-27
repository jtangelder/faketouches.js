faketouches.js
==============

Library to send fake touchevents. Used for testing Hammer.js.

## Usage

Fake a tap on the screen

````js
var faker = new FakeTouches(element);
faker.setTouchType(FakeTouches.POINTER_TOUCH_EVENTS);

faker.setTouches([[100,100]]);
faker.triggerStart();
faker.triggerEnd();
````

Fake a gesture
````js
faker.triggerGesture('Drag', function(){ 
	//callback
})
````