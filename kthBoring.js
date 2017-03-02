// https://codefights.com/challenge/2ST7pD433eT8SXNyM
/* jslint esversion:6 */
(function(){
"use strict";

/* find the kth "boring" number, that is, a number that is non-prime 
	and not a member of the fibonacci sequence
*/

var fi = [1, 1];
function nextFib(k){
	var l = fi.length - 1, n = 1;
	for(var i = 0; i < l; i++){
		if(fi[i] < k && fi[i+1] >= k){ return fi[i+1]; }
	}
	while (n < k){
		fi.push(fi[l] + fi[l-1]);
		l = fi.length - 1;
		n = fi[l];
	}
	return n;
}
function isFib(a){
	nextFib(a);
	return fi.indexOf(a) !== -1;
}

function mod(n, p){ 
	return n % p === 0;
}
var np = [2, 3];
function nextPrime(a){
	/* return the next prime number greater than a */
	if (np[np.length - 1] > a){
		for(var i = 0; i < np.length - 1; i++){
			if(np[i] < a && np[i+1] >= a){ return np[i+1]; }
		}
	}
	/* else go from last prime in np, calculate more primes */
	var n = np[np.length - 1] + 2;
	var prime, j, sq;
	for (;; n += 2){
		prime = true;
		sq = Math.sqrt(n);
		for(j = 0; j < np.length && np[j] <= sq; j++){
			// if(n === 9 && np[j] === 3){ debugger; }
			if (mod(n, np[j])){
				prime = false;
				break;
			}
		}
		if (prime){ np.push(n); if(n > a){ return n; } }
	}
}
// exports.nextPrime = nextPrime;
// exports.np = np;
function isPrime(a){
	// nextPrime(a);
	// return np.indexOf(a) !== -1;
	var q = Math.sqrt(a);
	for(var j = 2; j <= q; j++){
		if (a % j === 0){
			return false;
		}
	}
	return true;
}
// exports.isPrime = isPrime;

function kthBoring(k) {
	var z = 4, i = 1;
	while(i <= k){
		// if (z === 9){ debugger; }
		if(!isPrime(z) && !isFib(z)){
			// console.log(z + " is boring");
			if(i === k){ return z; }
			i++;
		}
		z++;
	}
}
// exports.kthBoring = kthBoring;

/*
f = a => {
	l = 1
	n = 1
	while (n < a){
		t = n + l
		l = n
		n = t
		if(n == a) return true
	}
	return false
}

p = a => {
	q = Math.sqrt(a)
	for(j = 2; j <= q; j++) if (a % j == 0) return false
	return true
}

kthBoring = k => {
	z = 4
	i = 1
	while(i <= k){
		if(!p(z) && !f(z)){
			if(i == k) return z
			i++
		}
		z++
	}
}
*/

var tests = [];

tests.push(1); // 4
tests.push(2); // 6
tests.push(3); // 9
tests.push(5); // 12
tests.push(6); // 14
tests.push(11); // 22
tests.push(10); // 20
tests.push(14); // 26
tests.push(17); // 30
tests.push(200000); // 219592

nextPrime(50);
for (var i in tests){ console.log(i + ": " + kthBoring(tests[i])); }

})();