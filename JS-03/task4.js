function filterRange(array, a, b) {
	let newArray = [];

	if ((a < 0) || (a > array.length) || (b < 0) || (b > array.length)) {
		console.log("Entered a number outside the array indices");
	} else {
		for (let i = a; i < b; i++) {
			if (!isNaN(array[i])) {
				newArray.push(array[i]);
			}
		}
	}
	
	return newArray;
}

let numbers = [ 0, 1, 2, "Saturday", 3, 4, "Friday", 5, 6, "Sunday" ];
console.log(filterRange(numbers, 2, 8));