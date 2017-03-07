// https://codefights.com/challenge/PR8br4c5qagRqmoab
/* jslint esversion:6 */
(function(){
"use strict";

function findTheFormula(s){
	/* we are finding ax+b=y given x=seq[0], y=seq[1] and x=seq[1], y=seq[2] */
	var a, b;
	if (s[0] === s[1] === s[2]){
		a = 0; b = s[0];
	} else if (s[0] === 0){
		b = s[1];
		a = (s[2] - b) / s[1];
	} else {
		b = Math.round((s[2]*s[0] - s[1]*s[1]) / (s[0] - s[1]));
		a = s[0]===0?1:Math.round((s[1] - b) / s[0]);
	}
	a = a===1?"":a===-1?"-":a+"";
	b = b===0?"":b>0?"+"+b:""+b;
	return a + "n" + b;
}

/*
findTheFormula = s => {
	i = s[0]
	j = s[1]
	k = s[2]
	b = (k*i-j*j)/(i-j)
	a = i==0?(k-b)/j:(j-b)/i
	return (a==1?"":a==-1?"-":a) + "n" + (b==0?"":b>0?"+"+b:b)
}
*/

var tests = [];
// n+1
tests.push([7, 8, 9]);
// 14n
tests.push([14, 196, 2744]);
// -n
tests.push([15, -15, 15]);
// 2n-3
tests.push([1, -1, -5]);
// 100n-1
tests.push([99, 9899, 989899]);

for (let i of tests){ console.log(i + ": " + findTheFormula(i)); }

})();