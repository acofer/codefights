/* jslint esversion:6 */

// simple iterative primality check
d = (j,k) => j % k === 0;
c = (j) => {
	r = j === 1;
	for(var k = 2; k <= Math.sqrt(j); k++) if(d(j,k)) r = true;
	return r;
};
r = i => Array(i).fill().map((x,i)=>i+1);
sumDivisors = (n) =>  n===0?0:r(n).filter(i=>d(n,i) && c(i)).reduce((a,b)=>a+b);

// sieve of eratosthenes method
// generate list of non-prime numbers up to n, sum it
// find the ones that are divisors of n
c = (j) => {
	l = [];
	for(p = 2; p <= j; p++){
		for(m = p; m*p <= j; m++){
			l[m*p] = 1;
		}
	}
	n = [1];
	l.forEach((e,i) => { if(e == 1) n.push(i); });
	return n;
};
sumDivisorsEratosthenes = (n) => n === 0 ? 0 : c(n).filter((k) => n % k === 0).reduce((a,b)=>a+b);


for(var q = 0; q <= 30; q++){
	console.log('n: ' + q + ' sum: ' + sumDivisors(q));
}
console.log('Big n: ' + sumDivisors(Math.pow(10,7)));