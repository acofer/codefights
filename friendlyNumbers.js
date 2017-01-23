/* jslint esversion:6 */
/* https://codefights.com/challenge/zeS6of248AhuJB3xM */

function friendly_numbers(x, y) {
	var pdx = [1], i, pdy = [1], l = 100000;
	if(x===y || x > k || x < 1 || y > k || y < 1){ return "No"; }
	for(i=2; i<=x/2; i++){
		if(x%i===0){pdx.push(i);}
	}
	for(i=2; i<=y/2; i++){
		if(y%i===0){pdy.push(i);}
	}
	var sum = a => a.reduce((j,k)=>j+k);
	return (sum(pdy) === x && sum(pdx) === y)?"Yes":"No";
}

/*
s = a => a.reduce((j,k)=>j+k)
d = k =>{ p=[1]; for(i=2;i<=k/2;i++) if(k%i==0) p.push(i); return p; }
friendly_numbers = (x, y) => (x!=y && s(d(x)) == y && s(d(y)) == x)?"Yes":"No"
*/

console.log(friendly_numbers(165,123));
console.log(friendly_numbers(186,126));