// https://codefights.com/challenge/2jkS5hmtYhyB8mL76
/* jslint esversion:6 */
(function(){

/*
"use strict";
const straight = "23456789TJQKA";

Set.prototype.equals = function(set){
	for (var s of set){ if (!this.has(s)){ return false; } }
	for (var t of this){ if (!set.has(t)){ return false; } }
	return true;
};
Set.prototype.print = function(){
	var out = [];
	for (var s of this){
		out.push(s);
	}
	console.log(JSON.stringify(out));
};

function isStraight(p){
	var h = p.map(c => c[0]);
	var hs = new Set(h), ss;
	var st = "A" + straight;
	for (var i = 0; i < st.length - 4; i++){
		ss = new Set(st.slice(i, i+5).split(''));
		if (hs.equals(ss)){ return true; }
	}
	return false;
}

function isFlush(h){
	var suit = h[0][1];
	for (var c of h){
		if (c[1] !== suit){
			return false;
		}
	}
	return true;
}

function ccomp(a, b){
	return straight.indexOf(a)>straight.indexOf(b)?-1:straight.indexOf(a)<straight.indexOf(b)?1:0;
}

function high(p){
	var phigh = -1;
	for (var i of p){
		if (straight.indexOf(i[0]) > phigh){
			phigh = straight.indexOf(i[0]);
		}
	}
	return phigh;
}

function cardcounts(h){
	var buckets = {};
	for (var i of straight){ buckets[i] = 0; }
	for (var c of h){ buckets[c]++; }
	return buckets;
}

function hand(p, tie){
	var s, f, three, pair, rhand = "";
	if (isFlush(p)){
		f = true;
		rhand = "flush";
	}
	if (isStraight(p)){
		s = true;
		rhand = f ? "stflush" : "straight";
	}
	if (f){
		tie.push(...p.map(c=>c[0]).sort(ccomp).map(f=>straight.indexOf(f)));
	}
	if (s){
		var hp = high(p);
		if (hp === straight.length - 1 && p.map(c=>c[0]).indexOf('2') !== -1){ hp = 3; }
		tie.push(hp);
	}
	if (f || s){ return rhand; }
	var counts = cardcounts(p.map(c => c[0]));
	for (var i in counts){ if (counts.hasOwnProperty(i)){
		var ii = straight.indexOf(i);
		if (counts[i] === 4){
			rhand = "four";
			tie.push(ii);
		}
		if (counts[i] === 3 && !(s || f)){
			rhand = "three";
			tie.unshift(ii);
			three = true;
		}
		if (counts[i] === 2 && !(s || f)){
			if (pair){
				rhand = "twopair";
				if(ii > tie[0])
					tie.unshift(ii);
				else
					tie.push(ii);
			} else {
				rhand = "pair";
				pair = true;
				tie.push(ii);
			}
		}
	}}
	var singles = [];
	for (var j in counts){ if (counts.hasOwnProperty(j)) {
		if (counts[j] === 1){
			singles.push(j);
		}
	}}
	tie.push(...singles.sort(ccomp).map(f=>straight.indexOf(f)));
	if (three && pair){
		rhand = "full";
	}
	return rhand;
}

const hands = ["high", "pair", "twopair", "three", "straight", "flush", "full", "four", "stflush"];
function pokerWinner(p1, p2){
	var tie1 = [], tie2 = [];
	var p1hand = hand(p1, tie1), p2hand = hand(p2, tie2);
	console.log("p1: " + p1hand + ", p2: " + p2hand);
	if (hands.indexOf(p1hand) > hands.indexOf(p2hand)){
		return 1;
	}
	if (hands.indexOf(p1hand) < hands.indexOf(p2hand)){
		return 2;
	}
	for (var i = 0; i < tie1.length && i < tie2.length; i++){
		if (tie1[i] > tie2[i]) return 1;
		if (tie1[i] < tie2[i]) return 2;
	}
	return 0;
}
*/

z = "23456789TJQKA";

Set.prototype.equals = function(set){
	var r = true;
	for (var s of set) if (!this.has(s)) r = false;
	for (var t of this) if (!set.has(t)) r = false;
	return r;
};

iS = p => {
	h = p.map(c => c[0]);
	hs = new Set(h);
	st = "A" + z;
	for (var i = 0; i < st.length - 4; i++){
		ss = new Set(st.slice(i, i+5).split(''));
		if (hs.equals(ss)){ return true; }
	}
	return false;
};

cmp = (a, b) => {
	j = z.indexOf(a);
	k = z.indexOf(b);
	return j>k?-1:j<k?1:0;
};

cc = h => {
	b = {};
	for (var i of z){ b[i] = 0; }
	for (var c of h){ b[c]++; }
	return b;
};

H = (p, t) => {
	var s, f, T, P, r = "w", n, ii;
	// if (iF(p)){
	if (p.every(c=>c[1]===p[0][1])){
		f = true;
		r = "f";
	}
	if (iS(p)){
		s = true;
		r = f ? "r" : "s";
	}
	if (f) t.push(...p.map(c=>c[0]).sort(cmp).map(f=>z.indexOf(f)));
	if (s){
		hp = Math.max(...p.map(c => z.indexOf(c[0])));
		if (hp === z.length - 1 && p.map(c=>c[0]).indexOf('2') !== -1){ hp = 3; }
		t.push(hp);
	}
	if (f || s) return r;
	n = cc(p.map(c => c[0]));
	for (var i in n){
		ii = z.indexOf(i);
		if (n[i] === 4){
			r = "4";
			t.push(ii);
		}
		if (n[i] === 3 && !(s || f)){
			r = "3";
			t.unshift(ii);
			T = true;
		}
		if (n[i] === 2 && !(s || f)){
			if (P){
				r = "d";
				if(ii > t[0])
					t.unshift(ii);
				else
					t.push(ii);
			} else {
				r = "p";
				P = true;
				t.push(ii);
			}
		}
	}
	var q = [];
	for (var j in n) if (n[j] === 1) q.push(j);
	t.push(...q.sort(cmp).map(f=>z.indexOf(f)));
	if (T && P) r = "5";
	return r;
};

d = "pd3sf54r";
pokerWinner = (p1, p2) => {
	var t1 = [], t2 = [], r = 0, h1 = d.indexOf(H(p1, t1)), h2 = d.indexOf(H(p2, t2));
	if (h1 > h2) r = 1;
	if (h1 < h2) r = 2;
	if (r) return r;
	for (var i = 0; i < t1.length && i < t2.length; i++){
		if (t1[i] > t2[i]){ r = 1; break; }
		if (t1[i] < t2[i]){ r = 2; break; }
	}
	return r;
};

var tests = [];
tests.push({ p1: ['4H', '2H', '3D', '7H', '9H'], p2: ['2H', '9C', '4D', '5H', 'KH']}); // 2
tests.push({ p1: ['3H', '2H', '2D', 'TH', '5H'], p2: ['3H', '2H', '2D', 'TH', '5H']}); // 0
tests.push({ p1: ['2C', '2H', '5D', '8H', '5H'], p2: ['1H', '5H', '5D', '1H', 'TH']}); // 1
tests.push({ p1: ['2C', '2H', '8D', 'QH', 'QC'], p2: ['AH', 'QH', 'KD', 'JH', 'TH']}); // 2
tests.push({ p1: ['2C', '2H', '2D', '2H', 'QC'], p2: ['1H', '2H', '2D', 'TH', '5H']}); // 1
tests.push({ p1: ['2D', '4D', '3D', 'TD', 'QD'], p2: ['1H', '2H', '2D', '1D', '3C']}); // 1
tests.push({ p1: ['2C', '2H', '2D', '2H', 'QC'], p2: ['1H', '2H', '5H', '4H', '3H']}); // 1
tests.push({ p1: ['AC', '2C', '3C', '4H', '5C'], p2: ['3H', '4H', '5C', '6H', '7H']}); // 2
tests.push({ p1: ["3H", "7H", "JC", "3C", "5H"], p2: ["8S", "KC", "2C", "6H", "7S"]}); // 1

for (var i in tests){ console.log(i + ": " + pokerWinner(tests[i].p1, tests[i].p2)); }

})();