var elemContainer = document.querySelector('.elem-container');

QUnit.test( "Test Translate Values", function( assert ) {
	var yElem = document.createElement('div');
	yElem.style.transform = 'translateY(25px)';
	var xElem = document.createElement('div');
	xElem.style.transform = 'translateX(40px)';
	var multiElem = document.createElement('div');
	multiElem.style.transform = 'translateY(10px) translateX(20px)';
	
	
	elemContainer.appendChild(yElem);
	elemContainer.appendChild(xElem);
	elemContainer.appendChild(multiElem);
	var yVal = transformVal.getTranslate(yElem, 'Y');
	var xVal = transformVal.getTranslate(xElem, 'X');
	var multiVal = transformVal.getTranslate(multiElem);
	
	assert.equal( yVal, 25, "Got Y Value" );
	assert.equal( xVal, 40, "Got X Value" );
	assert.deepEqual( multiVal, [20, 10], "Got Multiple Values" );
});