/* jslint esversion:6 */

function bestCoinsExchange(coins, change) {
	var possible = [];
	coins.sort((a,b)=>{ return a<b?1:a>b?-1:0; });
	var i = 0, j = 0, ret, ch;
	for(; i < coins.length; i++){
		ret = [];
		ch = change;
		for(j = i; j < coins.length; j++){
			var c = coins[j];
			if(c <= ch){
				var m = Math.floor(ch/c);
				ret.push([c, m]);
				ch -= c*m;
				if(ch < 1){ break; }
			}
		}
		possible.push(ret);
	}
	// go through possible to find change with "most high-value coins"
	var best = possible[0], bn, pn, bm, pm, bj, pj;
	for(i = 1; i < possible.length; i++){
		/* take solution with fewest number of coins */
		bn = pn = 0; /* number of coins in each solution */
		for(j = 0; j < best.length; j++){ bn += best[j][1]; }
		for(j = 0; j < possible[i].length; j++){ pn += possible[i][j][1]; }
		if(pn < bn){ debugger; best = possible[i]; }
		/* if there are multiple solutions with the same number, take solution with higher value coins */
		if (pn === bn){
			debugger;
			bm = pm = 0;
			for(j = 0; j < best.length; j++){ bj = best[j][0]; if(bj>bm) bm=bj; }
			for(j = 0; j < possible[i].length; j++){ pj = possible[i][j][0]; if(pj>pm) pm=pj; }
			if(pm > bm){ best = possible[i]; }
		}
	}
	return best;
}

function Case(coins, change){
	this.coins = coins;
	this.change = change;
}

var cases = [
	// new Case([2, 3, 4], 6), // [[4, 1], [2, 1]]
	// new Case([1, 5, 9, 19], 20), // [[19, 1], [1, 1]]
	// new Case([1, 2, 5, 10], 33), // [[10, 3], [2, 1], [1, 1]]
	// new Case([1, 10, 15], 20), // [[10, 2]]
	new Case([1, 17, 29, 32, 47, 63, 73, 83, 103, 104, 110, 117, 127, 136, 154, 162, 168, 172, 191, 209, 213, 216, 219, 225, 244, 254, 271, 286, 296, 315, 333, 339, 343, 353, 369, 388, 396, 403, 420, 433, 438, 444, 450, 460, 476, 478, 495, 500, 502, 519], 5000), // [[519, 8], [495, 1], [353, 1]]
];

cases.forEach((c) => console.log(c.coins + ': ' + JSON.stringify(bestCoinsExchange(c.coins, c.change))));