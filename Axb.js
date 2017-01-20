/* jslint esversion:6 */

function Axb(I, b){
	/* Returns the Euclid GCD of the given integers. Each input must be non-negative. */
	gcd = (x, y) => {
		while (y !== 0) {
			var z = x % y;
			x = y;
			y = z;
		}
		return x;
	};
	var A = [], M = Math, i, j, k, l = I.length, m, e, D = 1;
	for(j in I){
		A[j] = [];
		for(i in I){
			A[j][i] = I[i][j];
		}
	}
	for(i in A){
		A[i].push(b[i]);
	}
	var z = [0, 0 ,0];
	for(i = 0; i < l; i++){
		/* should actually pivot */
		e = A[i][i];
		if(e === 0){ return z; }
		/* save off divisors for reinflating to integers later */
		D *= e;
		for(j=i; j < l+1; j++){
			A[i][j] /= e;
		}
		/* for all the rows below */
		for (k = i+1; k < l; k++){
			m = A[k][i]/A[i][i];
			/* for every column */
			for(j = i; j < l+1; j++){
				A[k][j] -= A[i][j] * m;
			}
		}
	}
	/* back substitution */
	for (i = l-1; i >= 0; i--){
		/* for all the rows above */
		for (k = i-1; k >= 0; k--){
			m = A[k][i] / A[i][i];
			for(j=l; j >= i; j--){
				A[k][j] -= A[i][j] * m;
			}
		}
	}
	x = A.map(i=>M.round(i.slice(-1)*D));
	/* special for codefights problem: can't have negative multiples */
	if (!(x.every(i=>i>=0) || x.every(i=>i<=0))){ return z; }
	x = x.map(i=>M.abs(i));
	var g = x.reduce(gcd);
	x = x.map(i=>i/g);
	return x;
}


var I = [[1,2,1], 
 [3,2,1], 
 [1,1,2]];
var b = [1, 1, 1];
console.log(Axb(I, b));
// [1, 1, 2]

var I = [[1,2,3], 
 [2,3,1], 
 [3,1,2]];
var b = [1, 1, 1];
console.log(Axb(I, b));
// [1, 1, 1]

var I = [[2,12,9], 
 [256,5,729], 
 [121,110,132]];
var b = [3, 1, 8];
console.log(Axb(I, b));
// [36267, 7249, 2459]

var I = [[1,10,9], 
 [10,1,3], 
 [57,75,79]];
var b = [13515, 15322, 65382];
console.log(Axb(I, b));

var I = [[1,2,3], [3,2,1], [2,3,1]];
var b = [4, 4, 4];
console.log(Axb(I, b));
// [1, 1, 0]

var I = [[7,13,22], 
 [9,2,1], 
 [8,7,6]];
var b = [170, 144, 193];
console.log(Axb(I, b));