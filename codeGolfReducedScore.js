/* jslint esversion:6 */
// https://codefights.com/challenge/9kmuSXmkpwEpNLkYj
function codeGolfReducedScore(code) {
	// find string literals and remove them
	var score = 0, c, o, newcode = [];
	for (let i = 0; i < code.length; i++){
		c = code[i];
		if (c === "\"" || c === "'"){
			var str = c;
			for (let j = i+1; j < code.length; j++){
				o = code[j];
				if (o === "\"" || o === "'"){
					score += (j - i) + 1;
					i = j;
					break;
				}
			}
		} else {
			newcode.push(c);
		}
	}
	var tokens = newcode.join('').split(/\s/);
	// if keyword or identifier (letters and digits, with first character being letter)
	// then add 1 to score
	var words = [], sp, ma;
	for(let t of tokens){
		// test for non-alphanumerics, split and add to identifiers
		ma = t.match(/\W/g);
		if(ma){
			score += ma.length;
			sp = t.split(/\W/g);
			words = words.concat(sp.filter(m=>m.length > 0));
		} else {
			words.push(t);
		}
	}
	var ids = [];
	for(let w of words){
			// test for number literals, add length to text
		if(!isNaN(Number(w))){
			// console.log("Found a number.");
			score += w.length;
			continue;
		} else {
			ids.push(w);
		}
	}
	// everything left is an identifier
	score += ids.length;
	return score;
}
/*
nl = o => !isNaN(+o)?o.length:1
codeGolfReducedScore = d => {
	var s = 0, r = /\W/g, l
	[...d].map(c => {
        l = c == '"' || c == "'"?!l:l
        return l?s+=1&&null:c
    }).join('').split(/\s/).map(t=>{
		h = t.match(r)
		if(h){
			s += h.length
			t.split(r).filter(m=>m).map(x=>s+=nl(x))
		} else
			s += nl(t)
	})
	return s
}
*/


var code = [];
// code.push("var text = \"This is JavaScript text\";"); // 1: 29
code.push("let date = Date.now();"); // 2: 9
code.push("var test = '';\rfor (var index = 0; index < 10; index++)\rtest += index;\ralert(test);"); // 3: 32
code.push("var pi = Math.PI;"); // 4: 7
code.push("var answer = 42;"); // 5: 6
code.push("var lambda = function() {};"); // 6: 9
code.push("var lolwat = '\r\\t';"); // 7: 9
code.push("\tvar Test = 'New to ES6';\r"); // 8: 16
code.push("i = k = r = []\rextractPinCode = c => \rc.map(x => \r    ++i % 2 ? y = x - b + 7 >> 1 : (o = x - a + 3 + 6 * y >> 1) > 11 ? --k : r[k++] = o % 11, \r    b = c.pop(a = c.pop())\r) && r"); // 9: 91
code.push("somevar = 20"); // 10: 4
code.push("a2 = 'test 40';b2d42=\"nope\""); // 11: 20
code.push("Test1 = 23;\rtest2 = Test1"); // 12: 8

var c = '';
for (let i in code){
	c = code[i];
	console.log((+i + 1) + ": " + codeGolfReducedScore(c));
}