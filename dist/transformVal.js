(function() {
	var transformVal = {
		getTranslate: function(elem, dir) {
			// Elem takes a jQuery elem
			// Dir is direction of translation
			
//			if (elem instanceof jQuery === false) {
//				elem = $(elem);
//			}
			
			var val;
			var matrix = window.getComputedStyle(elem);
			matrix = matrix.getPropertyValue('transform');
			
			// Convert matrix to array
			matrix = matrix.replace('matrix(', '').replace(')', '');
			matrix = matrix.split(', ')
//			console.log(matrix);
			
			if (dir === 'Y') {
				val = parseInt(matrix[5], 10);
			}
			if (dir === 'X') {
				val = parseInt(matrix[4], 10);
			}
			if (dir === undefined) {
				val = [parseInt(matrix[4], 10), parseInt(matrix[5], 10)];
			}
			
			return val;

		}
	}
	
	window.transformVal = transformVal;
	return transformVal;
})();