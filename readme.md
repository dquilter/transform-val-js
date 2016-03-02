# TransformVal.js

When getting values for CSS Transforms with Javascript, you'll be returned a matrix of values which, while they represent the transformation, aren't great for interpreting the transformation. TransformVal.js aims to provide a set of methods for getting the raw transformation values.

## Example

The following element has been transformed using CSS:

    .elem { 
	    transform: translateY(25px); 
	}

Here, we are trying to get the value with Javascript:

	var elem = document.querySelector('.elem');
	var matrix = window.getComputedStyle(elem);
	matrix = matrix.getPropertyValue('transform');
	// Returns "matrix(1, 0, 0, 1, 0, 25)"

TransformVal.js returns somthing that's more usable:

	var elem = document.querySelector('.elem');
	transformVal.getTranslate(elem, 'Y');
	// Returns the number 25

## Methods

### General

For all of the following methods, the `elem` parameter is required, and can be a vanilla Javascript reference to an element, or a jQuery reference.

### getTranslate

Gets the values of a translation:

	transformVal.getTranslate(elem, dir);

The `dir` parameter is optional. Specifying either a 'Y' or 'X' will return the translation along the relevant axis. Omitting this parameter will mean an array of values will be returned.

Values in pixels will always be returned, whether the translation is specified in the styles as a fixed pixel value or a percentage.

### getScale

Gets the values of a scale transformation:

	transformVal.getScale(elem, dir);
	
The `dir` parameter is optional. Specifying either a 'Y' or 'X' will return the translation along the relevant axis. Omitting this parameter will mean an array of values will be returned.

Values returned are numeric, representing the scale where 1 equals the original size, 0.5 would equal half the original size and 2 would equal twice the original size.

### getRotate

Gets the values of a 2D rotate transformation:

	transformVal.getRotate(elem);
	
Values returned are numeric, representing the degrees that the element has been rotated. If the initial rotation is a negative value, the value returned will be the positive counterpart. For example a rotation of `-60deg` will return `300`.

### get3DRotate

Gets the values of a 3D rotate transformation:

	transformVal.get3DRotate(elem);
	
Values returned are numeric, representing the degrees that the element has been rotated. If the initial rotation is a negative value, the value returned will be the positive counterpart. For example a rotation of `-60deg` will return `300`.