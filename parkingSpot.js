/* jslint esversion:6 */

function parkingSpot(car, p, luckySpot) {
	// car[0] is longer dy > car[0], dx > car[1]
	// Start from the sides
	// go down the rows, seeing if car will fit through each column
	// until it occupies lucky spot
	var v = isVertical(luckySpot), i, j, k, path;
	console.log("Vertical: " + v);
	console.log("p.l: " + (0 <= (p.length - 1 - car[0])) );
	debugger;
	if (!carFitsInSpot(car, p, luckySpot)){ return false; }
	if (v){
		// check for zeros either above or below luckySpot
		path = true;
		// check above
		for (i = 0; i <= luckySpot[0]; i++){
			for (j = luckySpot[1]; j <= luckySpot[1]+(car[1]-1); j++){
				if (p[i][j] === 1){
					path = false;
					break;
				}
			}
			if (!path){ break; }
		}
		if (path){ return true; }
		// no path above, check from below
		path = true;
		for (i = p.length - 1; i >= luckySpot[2]; i--){
			for (j = luckySpot[1]; j <= luckySpot[1]+(car[1]-1); j++){
				if (p[i][j] === 1){
					path = false;
					break;
				}
			}
			if (!path){ break; }
		}
		if (path){ return true; }
	} else {
		// horizontal, check for zeros to left or right of luckySpot
		path = true;
		// check left
		for (i = luckySpot[0]; i <= luckySpot[0]+(car[1]-1); i++){
			for (j = 0; j <= luckySpot[1]; j++){
				if (p[i][j] === 1){
					path = false;
					break;
				}
			}
			if (!path){ break; }
		}
		if (path){ return true; }
		// check right
		path = true;
		for (i = luckySpot[0]; i <= luckySpot[0]+(car[1]-1); i++){
			for (j = p[i].length - 1; j >= luckySpot[3]; j--){
				if (p[i][j] === 1){
					path = false;
					break;
				}
			}
			if (!path){ break; }
		}
		if (path){ return true; }
	}
	// car fits in spot, but there is no path
	return false;
}

function isVertical(luckySpot){
	// x is the VERTICAL coordinate
	var dx = luckySpot[2] - luckySpot[0];
	var dy = luckySpot[3] - luckySpot[1];
	return dx > dy;
}

function carFitsInSpot(car, p, luckySpot){
	var v = isVertical(luckySpot), i, j;
	for (i = luckySpot[0]; i <= luckySpot[0]+(car[v?0:1]-1); i++){
		if (i > luckySpot[2]){ return false; } // car is bigger than spot
		for (j = luckySpot[1]; j <= luckySpot[1]+(car[v?1:0]-1); j++){
			if (j > luckySpot[3]){ return false; } // car is bigger than spot
			if (p[i][j] === 1){
				return false;
			}
		}
	}
	return true;
}

var o;
o = {
	carDimensions: [3, 2],
	parkingLot: [
	 [1,0,1,0,1,0], 
	 [0,0,0,0,1,0], 
	 [0,0,0,0,0,1], 
	 [1,0,1,1,1,1]
	],
	luckySpot: [1, 1, 2, 3]
};
console.log(parkingSpot(o.carDimensions, o.parkingLot, o.luckySpot));
/*
Expected Output:
true
*/

o = {
	carDimensions: [3, 2],
	parkingLot: [
	 [1,0,1,0,1,0], 
	 [1,0,0,0,1,0], 
	 [0,0,0,0,0,1], 
	 [1,0,0,0,1,1]
	],
	luckySpot: [1, 1, 2, 3],
};
console.log(parkingSpot(o.carDimensions, o.parkingLot, o.luckySpot));
/*
Expected Output:
false
*/

o = {
	carDimensions: [4, 1],
	parkingLot: [
	 [1,0,1,0,1,0], 
	 [1,0,0,0,1,0], 
	 [0,0,0,0,0,1], 
	 [1,0,0,0,1,1]
	],
	luckySpot: [0, 3, 3, 3],
};
console.log(parkingSpot(o.carDimensions, o.parkingLot, o.luckySpot));
/*
Expected Output:
true
*/

o = {
	carDimensions: [2, 1],
	parkingLot: [
	 [1,0,1], 
	 [1,0,1], 
	 [1,1,1]],
	luckySpot: [0, 1, 1, 1],
};
console.log(parkingSpot(o.carDimensions, o.parkingLot, o.luckySpot));
/*
Expected Output:
true
*/