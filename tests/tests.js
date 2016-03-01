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

QUnit.test( "Test 2D Rotation Values", function( assert ) {
	var standardElem = document.createElement('div');
	standardElem.style.transform = 'rotate(45deg)';
	elemContainer.appendChild(standardElem);

	var highElem = document.createElement('div');
	highElem.style.transform = 'rotate(280deg)';
	elemContainer.appendChild(highElem);
	
	var minusElem = document.createElement('div');
	minusElem.style.transform = 'rotate(-60deg)';
	elemContainer.appendChild(minusElem);
	
	var standardVal = transformVal.getRotate(standardElem);
	var highVal = transformVal.getRotate(highElem);
	var minusVal = transformVal.getRotate(minusElem);
	
	assert.equal( standardVal, 45, "Got Rotation Value" );
	assert.equal( highVal, 280, "Got Rotation Value" );
	assert.equal( minusVal, 300, "Got Rotation Value" );
});

QUnit.test( "Test 3D Rotation Values", function( assert ) {
	var yElem = document.createElement('div');
	yElem.style.transform = 'rotateY(45deg)';
	elemContainer.appendChild(yElem);
	var yHighElem = document.createElement('div');
	yHighElem.style.transform = 'rotateY(245deg)';
	elemContainer.appendChild(yHighElem);
	var yMinusElem = document.createElement('div');
	yMinusElem.style.transform = 'rotateY(-45deg)';
	elemContainer.appendChild(yMinusElem);
	
	var xElem = document.createElement('div');
	xElem.style.transform = 'rotateX(20deg)';
	elemContainer.appendChild(xElem);
	var xHighElem = document.createElement('div');
	xHighElem.style.transform = 'rotateX(260deg)';
	elemContainer.appendChild(xHighElem);
	var xMinusElem = document.createElement('div');
	xMinusElem.style.transform = 'rotateX(-200deg)';
	elemContainer.appendChild(xMinusElem);
	
	var yVal = transformVal.get3DRotate(yElem, 'Y');
	var yHighVal = transformVal.get3DRotate(yHighElem, 'Y');
	var yMinusVal = transformVal.get3DRotate(yMinusElem, 'Y');
	var xVal = transformVal.get3DRotate(xElem, 'X');
	var xHighVal = transformVal.get3DRotate(xHighElem, 'X');
	var xMinusVal = transformVal.get3DRotate(xMinusElem, 'X');

	assert.equal( yVal, 45, "Got Y Value" );
	assert.equal( yHighVal, 245, "Got High Y Value" );
	assert.equal( yMinusVal, -45, "Got Minus Y Value" );
	assert.equal( xVal, 20, "Got X Value" );
	assert.equal( xHighVal, 260, "Got High X Value" );
	assert.equal( xMinusVal, -200, "Got Minus X Value" );
});