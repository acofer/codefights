/* jslint esversion:6 */
/* https://codefights.com/challenge/4epHLhsXei3JhDY8o */
var M = Math, q = i => M.pow(i,2);

var sub = (A, i, j) =>
	/* return submatrix of A without row i, column j 
	var r = [], m = 0;
	for(var k = 0; k < A.length; k++){
		if(k===i){ continue; }
		r[m] = [];
		for(var l = 0; l < A[k].length; l++){
			if(l===j){ continue; }
			r[m].push(A[k][l]);
		}
		m++;
	}
	return r; */
	A.map((v)=>v.filter((w,l)=> l!==j)).filter((v,k)=>k!==i);

var det = (A) => {
	var sum = 0;
	if(A.length === 2){
		sum = (A[0][0] * A[1][1]) - (A[0][1] * A[1][0]);
		return sum;
	}
	for(var j = 0; j < A[0].length; j++){
		sum += ((j%2)?-1:1) * A[0][j] * det(sub(A, 0, j));
	}
	return sum;
};

var tri = (a, b, c) => a < b+c && b < a+c && c < a+b;
var quad = (a, b, c, d, e, f) => (tri(a, b, c) && tri(a, d, e) && tri(b, e, f) && tri(c, d, f));

var check = (A, B, C, D, E, F) => {
	/* Cayley-Menger Determinant is <= 0, then not a tetrahedron 
			http://mathworld.wolfram.com/Cayley-MengerDeterminant.html
	*/
	var P = [
		[0,    1,    1,    1,    1],
		[1,    0, q(A), q(C), q(D)],
		[1, q(A),    0, q(B), q(E)],
		[1, q(C), q(B),    0, q(F)],
		[1, q(D), q(E), q(F),    0]
	];
	return quad(A, B, C, D, E, F) && det(P) > 0;
	/* var d = M.abs(M.sqrt(det(P) / 288));
	 * return !isNaN(d) && d > 0.000000001;
	 */
};


var pr = (s) => {
	/* return next Pandita lexicographic permutation of s */
	var k = -1;
	for(var i = 0; i < s.length-1; i++){
		if(s[i] < s[i+1]){
			k = i;
		}
	}
	if(k < 0){ return null; }
	var l = -1;
	for(var j = k+1; j < s.length; j++){
		if(s[k] < s[j]){
			l = j;
		}
	}
	if(l < 0){ return null; }
	var t = s[k]; s[k] = s[l]; s[l] = t;
	var last = s.splice(k+1);
	last.reverse();
	return s.concat(last);
};

function TetrahedronMaxFace(g) {
	if(g.some(a => a <= 0 || a > M.pow(2,16))){ return 0; }
	g.sort((a,b)=>a>b?-1:a<b?1:0);
	var A, B, C, D, E, F, p = [0,1,2,3,4,5];
	while(p){
		A = g[p[0]]; B = g[p[1]]; C = g[p[2]]; D = g[p[3]]; E = g[p[4]]; F = g[p[5]];
		if(check(A,B,C,D,E,F)){ return A+B+C; }
		p = pr(p);
	}
	return 0;
}


// var A = [[1,2,3],[4,53,6],[7,8,9]];
// console.log(sub(A, 1, 1));
// console.log(sub(A, 2, 2));
// console.log(det(A));
var lengths = [2017, 2016, 2015, 5, 4, 3]; // 4038
console.log(TetrahedronMaxFace(lengths));
lengths = [2017, 2016, 2015, 5, 3, 2]; // 0
console.log(TetrahedronMaxFace(lengths));
lengths = [7, 7, 7, 13, 13, 13]; // 33
console.log(TetrahedronMaxFace(lengths));
lengths = [5, 5, 13, 13, 9, 8]; // 31
console.log(TetrahedronMaxFace(lengths));
lengths = [50, 48, 130, 131, 90, 80]; // 309
console.log(TetrahedronMaxFace(lengths));
lengths = [50, 47, 130, 131, 90, 80]; // 0
console.log(TetrahedronMaxFace(lengths));
lengths = [142, 130, 94, 87, 89, 54]; // 366
console.log(TetrahedronMaxFace(lengths));
lengths = [1420, 1400, 884, 870, 550, 540]; // 3360
console.log(TetrahedronMaxFace(lengths));

// lengths = [1, 1, 1, 1, 1, 1];
// console.log(TetrahedronMaxFace(lengths));
// lengths = [0, 0, 0, 0, 0, 0];
// console.log(TetrahedronMaxFace(lengths));

lengths = [2819, 2819, 1369, 1340, 1490, 1480];
console.log(TetrahedronMaxFace(lengths)); // 0
lengths = [2818, 2819, 1370, 1340, 1489, 1480];
console.log(TetrahedronMaxFace(lengths)); // 6977
