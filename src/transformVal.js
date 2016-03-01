(function() {
	var transformVal = {
		getTranslate: function(elem, dir) {
			// Dir is direction of translation

			var val;

			// Test for jQuery Object and convert
			var elem = transformVal.testjQuery(elem);
			// Get transform value
			var matrix = transformVal.getTransformVal(elem);
			// Convert matrix to array
			matrix = transformVal.convertMatrixToArray(matrix);

			yVal = parseInt(matrix[5], 10);
			xVal = parseInt(matrix[4], 10);
			
			if (dir === 'Y') {
				val = yVal;
			}
			if (dir === 'X') {
				val = xVal;
			}
			if (dir === undefined) {
				val = [xVal, yVal];
			}
			
			return val;
		},
		getScale: function(elem, dir) {

			var val;

			// Test for jQuery Object and convert
			var elem = transformVal.testjQuery(elem);
			// Get transform value
			var matrix = transformVal.getTransformVal(elem);
			// Convert matrix to array
			matrix = transformVal.convertMatrixToArray(matrix);
			
			yVal = parseFloat(matrix[3]);
			xVal = parseFloat(matrix[0]);

			if (dir === 'Y') {
				val = yVal;
			}
			if (dir === 'X') {
				val = xVal;
			}
			if (dir === undefined) {
				val = [xVal, yVal];
			}
						
			return val;
			
		},
		getRotate: function(elem) {
			
			var degVal;
			var val
			
			// Test for jQuery Object and convert
			var elem = transformVal.testjQuery(elem);
			// Get transform value
			var matrix = transformVal.getTransformVal(elem);
			
			// Convert matrix to array
			matrix = transformVal.convertMatrixToArray(matrix);
			
			degVal = [
				transformVal.radiansToDeg(Math.acos(matrix[0])),
				transformVal.radiansToDeg(Math.asin(matrix[1])),
				transformVal.radiansToDeg(Math.asin(matrix[2]) * -1),
				transformVal.radiansToDeg(Math.acos(matrix[3]))
			]
			
			var val = transformVal.radiansToDeg(Math.atan2(matrix[1], matrix[0]));
			if (val < 0) {
				val = 360 + val;
			}
			
			return val;
						
		},
		
		// 3D Transfoms
		get3DRotate: function(elem, dir) {
			
			var degVal;
			var val;
			
			// Test for jQuery Object and convert
			var elem = transformVal.testjQuery(elem);
			// Get transform value
			var matrix = transformVal.getTransformVal(elem);
			
			console.log(matrix)
			
			// Convert matrix to array
			matrix = transformVal.convertMatrixToArray(matrix);
			
			if (dir === 'Y') {
				degVal = [
					transformVal.radiansToDeg(Math.acos(matrix[0])),
					transformVal.radiansToDeg(Math.asin(matrix[2]) * -1),
					transformVal.radiansToDeg(Math.asin(matrix[8])),
					transformVal.radiansToDeg(Math.acos(matrix[10]))
				]
				val = transformVal.radiansToDeg(Math.atan2(matrix[2], matrix[0]) * -1);
			} else if (dir === 'X') {
				degVal = [
					transformVal.radiansToDeg(Math.acos(matrix[5])),
					transformVal.radiansToDeg(Math.asin(matrix[6])),
					transformVal.radiansToDeg(Math.asin(matrix[9]) * -1),
					transformVal.radiansToDeg(Math.acos(matrix[10]))
				]
				val = transformVal.radiansToDeg(Math.atan2(matrix[6], matrix[5]));
			}
			
			console.log(degVal)
			
			function testParity(degVal) {
				var test = degVal[0];
				var success = true;
				for (var i = 0; i < degVal.length; i++) {
					if (degVal[i] !== test) {
						success = false;
					}
				}
				return success;
			}
			
//			if (testParity(degVal) === true) {
//				return degVal[0];
//			} else {
//				return Error('Values do not match');
//			}
			
			return val;
			
		},
		
		
		// Utility
		convertMatrixToArray: function(string) {
			// Test for 2D or 3D matrix
			var reg = /matrix3d/;
			var match = string.match(reg);

			// Remove unwanted parts of string
			var val;
			if (match !== null) {
				val = string.replace('matrix3d(', '').replace(')', '');
			} else {
				val = string.replace('matrix(', '').replace(')', '');
			}
			
			// Create array
			val = val.split(', ')
			return val;
		},
		getTransformVal: function(elem) {
			var matrix = window.getComputedStyle(elem);
			matrix = matrix.getPropertyValue('transform');
			return matrix;
		},
		testjQuery: function(elem) {
			if (elem instanceof jQuery) {
				elem = elem[0];
			}
			return elem;			
		},
		radiansToDeg: function(radians) {
			var deg = (radians * 180) / Math.PI;
			deg = parseInt(deg.toFixed(0), 10);
			return deg;
		}
	}
	
	window.transformVal = transformVal;
	return transformVal;
})();