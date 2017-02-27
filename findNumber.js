/* jslint esversion:6 */
// https://codefights.com/challenge/o6Jz5K69quZeuAckn

/*
findNumber = n => {
	if (n === 0){ return 0; }
	var start = 3 * (n - 1) + 1;
	var ret = [];
	for (var i = start; i < start + 3; i++){
		ret.push(i);
	}
	return +(ret.join(''));
};
*/

r = (i,j) => j===i ? [j] : r(i, j-1).concat(j);
s = n => 3 * (n-1) + 1;
findNumber = n => n === 0 ? 0 : +(r(s(n), s(n)+2).join(''));

var tests = [];
tests.push(1); // 123
tests.push(2); // 456
tests.push(3); // 789
tests.push(4); // 101112
tests.push(5); // 131415
tests.push(6); // 161718
tests.push(7); // 192021
tests.push(0); // 0



for (let t of tests){ console.log(t + ": " + findNumber(t)); }