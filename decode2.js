/* jslint esversion:6 */

// https://codefights.com/challenge/6FcoYgXWmxETjuuaj
// A simple caesar cipher
function decode2(m) {
  o="";
  for (var j in m){
    n = (m[j].charCodeAt() - 96) % 26;
    o += String.fromCharCode(n * n % 26 + 96);
  }
  return o;
}
exports.decode2 = decode2;

// https://codefights.com/challenge/YhSoJczcT25LtkyuY
M = Math;
n = Math.min;
x = Math.max;
function combinePasture(v){
	// given v as [x1, y1, x2, y2, x3, y3, x4, y4],
	// where 1 2 3 and 4 are xy points
	// 1 and 2 are the bottom left and top right corners of square a
	// 3 and 4 "                                          " square b
	// return the area of the smallest square that can contain squares a and b
	minx = Math.min(v[0], v[4]); // 2
	maxx = Math.max(v[2], v[6]); // 9
	miny = Math.min(v[1], v[5]); // 5
	maxy = Math.max(v[3], v[7]); // 17
	dx = maxx - minx;
	dy = maxy - miny;
	maxd = max(dx, dy);
	return M.pow(maxd, 2);
}
// The above as a one-liner
exports.combinePasture = v => M.pow(
	max(x(v[2], v[6]) - n(v[0], v[4]), x(v[3], v[7]) - n(v[1], v[5])),
	2);

if (!module.parent){ var out = decode2("hello"); console.log(out); }