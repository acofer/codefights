/* jslint esversion:6 */
(function(){
"use strict";
function isFrenemy(n, frenemy, x, y, relation) {
	// start with person/row x
	// follow relationships - from x, build a set of people having first relation
	var this_set = new Set(), next_set = new Set(), c = frenemy[x];
	for(let i in c){ if(c[i] === relation[0]){ this_set.add(+i); } }
	for(let j = 1; j < relation.length; j++){
		next_set.clear();
		for(let k of this_set){
			// for each friend of x
			// get each relationship that matches
			c = frenemy[k];
			for(let i in c){ if(c[i] === relation[j]){ next_set.add(+i); } }
		}
		this_set = new Set(next_set);
	}
	return this_set.has(y)?1:0;
}

var n = 3;
var frenemy = [
	['-','F','E'],
	['F','-','F'],
	['E','F','-']
];
var x = 0;
var y = 2;
var relation = "EFF"; // 1
console.log(isFrenemy(n, frenemy, x, y, relation));

// var n = 2;
// var frenemy = [
// 	['-','F'],
// 	['F','-'],
// ];
// var x = 0;
// var y = 1;
// var relation = "F";
// console.log(isFrenemy(n, frenemy, x, y, relation));

})();