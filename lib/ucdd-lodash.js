/**
 * Gets the first element of `array`.
 *
 * @example
 *
 * _.first([1, 2, 3]);
 * // => 1
 *
 * _.first([]);
 * // => undefined
 */
function first(array) {
    if (array.length === 0)
        return undefined
    else
        return array[0]
}

/**
 * Gets all but the first element of `array`.
 *
 * @example
 *
 * _.rest([1, 2, 3]);
 * // => [2, 3]
 */
function rest(array) {
var restArray=[];
for(i=0; i< array.length-1; ++i){
    restArray[i]= array[i+1];
}
return restArray;
}

/**
 * Gets the index at which the first occurrence of `value` is found in `array`
 *
 * @example
 *
 * _.indexOf([1, 2, 3, 1, 2, 3], 2);
 * // => 1
 *
 */
function indexOf(array, value) {
    for (i=0; i< array.length; ++i){
        if (array[i] === value)
            return i ;
    }
}

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */
function compact(array) {
    var newArray=[]; 
    var j=0;
    for (i=0; i< array.length; ++i){
        if (array[i] != false && array[i] != null && array[i] != 
0 && array[i] != " " && array[i] != undefined && array[i] != NaN)
       {
            newArray[j]= array[i];
            ++j;
        }
}
return newArray;
}

/**
 * Gets the value of a specified property from all objects in an array
 *
 *	@example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 40 }
 * ];
 *
 * _.pluck(users, 'user');
 * // => ['barney', 'fred']
 *
 */
function pluck(array, key) {
    return "not yet implemented"
}


/**
 * Creates an array excluding all provided values 
 *
 * @example
 *
 * _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
 * // => [2, 3, 4]
 */
function without(array) {
	// Hint: Read this article about using the "arguments" variable
	// to access all provided values
	//
	// http://www.w3schools.com/js/js_function_parameters.asp
	//
	//

    return "not yet implemented"
}

// Export functions
var lib = {}
lib.first = first
lib.rest = rest
lib.indexOf = indexOf
lib.compact = compact
lib.without = without
lib.pluck = pluck

module.exports = lib