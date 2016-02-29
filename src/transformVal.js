(function() {
	var transformVal = {
		getTranslate: function(elem, dir) {
			// Dir is direction of translation
			
			// Test for jQuery Object and convert
			transformVal.testjQuery();
			
			var val;
			var matrix = window.getComputedStyle(elem);
			matrix = matrix.getPropertyValue('transform');
			
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
		getScale: function(elem) {

			// Test for jQuery Object and convert
			transformVal.testjQuery();
			
			var val;
			var matrix = window.getComputedStyle(elem);
			matrix = matrix.getPropertyValue('transform');
			
			// Convert matrix to array
			matrix = transformVal.convertMatrixToArray(matrix);
			
			yVal = parseFloat(matrix[3]);
			xVal = parseFloat(matrix[0]);
			
			val = [xVal, yVal];
			
			return val;
			
		},
		
		// Utility
		convertMatrixToArray: function(string) {
			var val = string.replace('matrix(', '').replace(')', '');
			val = val.split(', ')
			return val;
		},
		testjQuery: function(elem) {
			if (elem instanceof jQuery) {
				elem = $(elem)[0];
			}
			return elem;			
		}
	}
	
	window.transformVal = transformVal;
	return transformVal;
})();