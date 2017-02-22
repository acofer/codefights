/* jslint esversion:6 */

//https://codefights.com/challenge/ELRMTabuAk4NSbzpc

/*
function clockRadian(time) {
	var hh, mm;
	var sp = time.split(":");
	hh = +sp[0]; mm = +sp[1];
	
	//	each hour is hh * 1/6 pi + mm * (1/60 * 1/6) pi
	//	each minute is (1/30 * pi)
	//	angle is absolute value of the difference
	//	just have to do the fraction subtraction, then reduce
	var hn = hh * 60 + mm;
	var hd = 360;
	var mn = mm * 12;
	var md = 30 * 12; // 360
	//	if smaller angle is across noon...
	var dn = Math.abs(hn - mn);
	if (dn > 360){ dn = 720 - dn; }
	var f = reduce(dn, hd);
	var n = f[0] === 1 ? '' : '' + f[0];
	var d = f[1] === 1 ? '' : '/' + f[1];
	return n === '0' ? '0' : n + 'pi' + d;
}

// http://stackoverflow.com/questions/4652468/is-there-a-javascript-function-that-reduces-a-fraction
// Reduce a fraction by finding the Greatest Common Divisor and dividing by it.
function reduce(n,d){
  var gcd = function gcd(a,b){
    return b ? gcd(b, a%b) : a;
  };
  gcd = gcd(n,d);
  return [n/gcd, d/gcd];
}
*/


clockRadian = (t) => {
	p = t.split(":");
  b = +p[1];

	h = p[0] * 60 + b;
	m = b * 12;
	c = 360;

	a = Math.abs(h - m);
	f = r(a>c?720-a:a, c);
	n = f[0] == 1 ? '' : f[0];
	d = f[1] == 1 ? '' : '/' + f[1];
	return n == '0' ? '0' : n + 'pi' + d;
};

e = (a,b) => b ? e(b, a%b) : a;
r = (n,d) => {
  g = e(n,d);
  return [n/g, d/g];
};

var times = [];
times.push("3:00"); // pi/2
times.push("6:00"); // pi
times.push("2:20"); // 5pi/18
times.push("11:59"); // 11pi/360
times.push("10:16"); // 37pi/45

for(var t of times){ console.log(t + ": " + clockRadian(t)); }