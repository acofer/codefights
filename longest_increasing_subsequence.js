function longest_increasing_subsequence(a) {
	var sub = [], isub, l = a[0], i, j, k, n = a.length;
	/* find all increasing subsequences starting with i
		if any element is smaller than i, stop this subsequence
	*/
	for(i=0; i < n; i++){
		l = a[i];
		isub = [l];
		for(j=i+1; j < n; j++){
			if(a[j] > l){ l = a[j]; isub.push(l); }
			if(a[j] < l){ break; }
		}
		sub.push(isub);
	}
	return sub;
}

var inp = [];
inp.push([24, 12, 15, 15, 19]); // [12, 15, 19]
inp.push([5, 19, 5, 81, 50, 28, 29, 1, 83, 23]); // [5, 19, 28, 29, 83]
inp.push([2, 15, 3, 7, 8, 6, 18]); // [2, 3, 7, 8, 18]

for(var i = 0; i < inp.length; i++){
	console.log((i+1) + ': ' + JSON.stringify(longest_increasing_subsequence(inp[i])));
}
