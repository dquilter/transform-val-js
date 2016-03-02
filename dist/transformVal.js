(function() {
	var transformVal = {
		getTranslate: function(elem, dir) {
			var val;

			// Test for jQuery Object and convert
			var elem = this.testjQuery(elem);
			// Get transform value
			var matrix = this.getTransformVal(elem);
			// Convert matrix to array
			matrix = this.convertMatrixToArray(matrix);

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
			var elem = this.testjQuery(elem);
			// Get transform value
			var matrix = this.getTransformVal(elem);
			// Convert matrix to array
			matrix = this.convertMatrixToArray(matrix);
			
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
			var elem = this.testjQuery(elem);
			// Get transform value
			var matrix = this.getTransformVal(elem);
			
			// Convert matrix to array
			matrix = this.convertMatrixToArray(matrix);
			
			degVal = [
				this.radiansToDeg(Math.acos(matrix[0])),
				this.radiansToDeg(Math.asin(matrix[1])),
				this.radiansToDeg(Math.asin(matrix[2]) * -1),
				this.radiansToDeg(Math.acos(matrix[3]))
			]
			
			var val = this.radiansToDeg(Math.atan2(matrix[1], matrix[0]));
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
			var elem = this.testjQuery(elem);
			// Get transform value
			var matrix = this.getTransformVal(elem);
			
			console.log(matrix)
			
			// Convert matrix to array
			matrix = this.convertMatrixToArray(matrix);
			
			if (dir === 'Y') {
				degVal = [
					this.radiansToDeg(Math.acos(matrix[0])),
					this.radiansToDeg(Math.asin(matrix[2]) * -1),
					this.radiansToDeg(Math.asin(matrix[8])),
					this.radiansToDeg(Math.acos(matrix[10]))
				]
				val = this.radiansToDeg(Math.atan2(matrix[2], matrix[0]) * -1);
			} else if (dir === 'X') {
				degVal = [
					this.radiansToDeg(Math.acos(matrix[5])),
					this.radiansToDeg(Math.asin(matrix[6])),
					this.radiansToDeg(Math.asin(matrix[9]) * -1),
					this.radiansToDeg(Math.acos(matrix[10]))
				]
				val = this.radiansToDeg(Math.atan2(matrix[6], matrix[5]));
			}
			
			console.log(degVal)
			if (val < 0) {
				val = 360 + val;
			}

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