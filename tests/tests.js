var elemContainer = document.querySelector('.elem-container');

QUnit.test( "Test Translate Values", function( assert ) {
	var yElem = document.createElement('div');
	yElem.style.transform = 'translateY(25px)';
	elemContainer.appendChild(yElem);
	
	var xElem = document.createElement('div');
	xElem.style.transform = 'translateX(40px)';
	elemContainer.appendChild(xElem);
	
	var multiElem = document.createElement('div');
	multiElem.style.transform = 'translateY(10px) translateX(20px)';
	elemContainer.appendChild(multiElem);

	var percElem = document.createElement('div');
	percElem.style.transform = 'translateY(80%)';
	percElem.style.height = '50px';
	elemContainer.appendChild(percElem);
	var expectedPerc = 50 * 0.80; // height * percentage
		
	var yValJq = document.createElement('div');
	yValJq.style.transform = 'translateY(75px)';
	yValJq.classList.add('transformJquery');
	elemContainer.appendChild(yValJq);

	var yVal = transformVal.getTranslate(yElem, 'Y');
	var xVal = transformVal.getTranslate(xElem, 'X');
	var multiVal = transformVal.getTranslate(multiElem);
	var percVal = transformVal.getTranslate(percElem, 'Y');
	var jQueryTest = transformVal.getTranslate($('.transformJquery'), 'Y');
	
	assert.equal( yVal, 25, "Got Y Value" );
	assert.equal( xVal, 40, "Got X Value" );
	assert.deepEqual( multiVal, [20, 10], "Got Multiple Values" );
	assert.equal( jQueryTest, 75, "Got Y Value for jQuery Elem" );
	assert.equal( percVal, expectedPerc, "Got Percentage Value" );
});

QUnit.test( "Test Scale Values", function( assert ) {
	var yElem = document.createElement('div');
	yElem.style.transform = 'scaleY(0.9)';
	elemContainer.appendChild(yElem);
	
	var xElem = document.createElement('div');
	xElem.style.transform = 'scaleX(0.9)';
	elemContainer.appendChild(xElem);

	var multiElem = document.createElement('div');
	multiElem.style.transform = 'scale(1.1, 1.1)';
	elemContainer.appendChild(multiElem);
	
	var yVal = transformVal.getScale(yElem, 'Y');
	var xVal = transformVal.getScale(xElem, 'X');
	var multiVal = transformVal.getScale(multiElem);

	assert.equal( yVal, 0.9, "Got Y Value" );
	assert.equal( xVal, 0.9, "Got X Value" );
	assert.deepEqual( multiVal, [1.1, 1.1], "Got Multiple Values" );
});