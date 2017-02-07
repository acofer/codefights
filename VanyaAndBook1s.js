/* jslint esversion:6 */

/*
function VanyaAndBook1s(n) {
	var oom = (""+n).length;
	var c = 0, i = 0;
	for (; i < oom-1; i++){
		c += (i+1) * 9 * Math.pow(10,i);
	}
	c += oom * (n - (Math.pow(10,i) - 1));
	return c;
}
*/
var p = Math.pow;
var VanyaAndBook1s = n => {
	o = (""+n).length;
	return o * (n-(Math.pow(10,o-1)-1)) + 9 * '987654321'.slice(10 - o);
};

var list = {};
list['13'] = 17;
list['4'] = 4;
list['100'] = 192;
list['100000000'] = 788888898;
list['1'] = 1;
list['244'] = 624;
list['8431'] = 32617;
for(var n in list){
	console.log(n + ': ' + VanyaAndBook1s(+n) + ' - expected: ' + list[n]);
}
