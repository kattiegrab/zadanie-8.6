

var a = 5;
var b = 2;
var value = (a * a) + (2 * a * b) - (b * b);

console.log(value);

if (value > 0) {
	console.log(value + 'jest większe niż 0');
} else if (value < 0) {
	console.log(value + 'jest mniejsze niż zero');
}

if (value == 0) {
	console.log(value + 'jest równe zero');
} else if (value != 0) {
	console.log(value + 'nie jest równe zero');
}