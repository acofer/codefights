/* jslint esversion:6 */
(function(){
	"use strict";

/*
	var paths = 0;

	var memo = {};
	var ch = 0;

	function countValidSnakePaths(board, snake, n, path) {
		// go through all adjacent cells that exist and do not have a snake in them
		// for each valid next cell, update snake and countValidSnakePaths(board, newsnake, n-1)
		// if there is more than one valid next cell, add 1 to paths

		var key = JSON.stringify(snake) + n;
		if (memo[key] !== undefined){ ch++; return memo[key]; }
		var head = snake[0];
		var moves, dirs = ["L", "R", "U", "D"], d = 0;
		moves = [];
		if (head[0] !== 0){ moves.push([head[0] - 1, head[1]]); } // L
		if (head[0] + 1 <= board[0] - 1){ moves.push([head[0] + 1, head[1]]); } // R
		if (head[1] !== 0){ moves.push([head[0], head[1] - 1]); } // U
		if (head[1] + 1 <= board[1] - 1){ moves.push([head[0], head[1] + 1]); } // D

		var m, s, valid;
		snake.pop();
		paths = 0;
		for (var j = 0; j < moves.length; j++){
			valid = true;
			m = moves[j];
			for (var i = 0; i < snake.length; i++){
				s = snake[i];
				if (m[0] === s[0] && m[1] === s[1]){
					valid = false;
					break;
				}
			}
			if (!valid){ continue; }
			path += dirs[d];
			if (n <= 1){ paths += 1; } else { paths += countValidSnakePaths(board, [m].concat(snake), n-1, path); }
			d++;
		}
		// how many paths are possible from this position and n value?
		// if n <= 1, and the move is valid, then this is a valid path
		//   how do I add 1 to the total _from this position_

		memo[key] = paths;
		return paths;
	}
*/

var p = 0;
var o = {};

var countValidSnakePaths = (b, e, n) => {
	var k = JSON.stringify(e) + n, h = e[0], v = [], d;
	if (o[k]){ return o[k]; }
	if (h[0] !== 0) v.push([h[0] - 1, h[1]]);
	if (h[0] + 1 <= b[0] - 1) v.push([h[0] + 1, h[1]]);
	if (h[1] !== 0) v.push([h[0], h[1] - 1]);
	if (h[1] + 1 <= b[1] - 1) v.push([h[0], h[1] + 1]);

	e.pop();
	p = 0;
	for (var m of v){
		d = true;
		for (var s of e){
			if (m[0] === s[0] && m[1] === s[1]){
				d = false;
				break;
			}
		}
		if (!d) continue;
		if (n <= 1){ p += 1; } else { p += countValidSnakePaths(b, [m].concat(e), n-1); }
	}
	o[k] = p;
	return p;
};

	var tests = [];
	tests.push({
		board: [4, 3],
		snake: [
			[2,2],
			[3,2],
			[3,1],
			[3,0],
			[2,0],
			[1,0],
			[0,0]
		],
		n: 3
	}); // 7
	tests.push({
		board: [2, 3],
		snake: [
			[0,2],
			[0,1],
			[0,0],
			[1,0],
			[1,1],
			[1,2]
		],
		n: 10
	}); // 1
	tests.push({
		board: [9, 9],
		snake: [
			[0,2],
			[0,1],
			[0,0],
		],
		n: 15
	}); // 1

	var i = 0;
	for (let t of tests){
		p = 0;
		o = {};
		countValidSnakePaths(t.board, t.snake, t.n);
		console.log(i++ + ": " + p);
	}
})();
