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
		
		getRotate: function(elem, dir) {
			
			var val;
			
			// Test for jQuery Object and convert
			var elem = transformVal.testjQuery(elem);
			// Get transform value
			var matrix = transformVal.getTransformVal(elem);
			
			console.log(matrix)
			
			// Convert matrix to array
			matrix = transformVal.convertMatrixToArray(matrix);
			
			console.log(matrix)
			
			degVal = [
				transformVal.radiansToDeg(Math.acos(matrix[0])),
				transformVal.radiansToDeg(Math.asin(matrix[1])),
				transformVal.radiansToDeg(Math.asin(matrix[2]) * -1),
				transformVal.radiansToDeg(Math.acos(matrix[3]))
			]
			
			return degVal;
			
		},
		
		// Utility
		convertMatrixToArray: function(string) {
			var val = string.replace('matrix(', '').replace(')', '');
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