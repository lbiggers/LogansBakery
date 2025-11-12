var array = [];
var size = 10000;
for (var i = 0; i < size; i++) {
	array.push(getRandomInt(size));
}

console.log(array);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);	
}