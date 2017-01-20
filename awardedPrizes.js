/* jslint esversion:6 */

function awardedPrizes(prizes, guesses, answer) {
	sensiblePrizes = [];
	prizes.forEach((p)=>{
		start = p[0];
		end = p[1];
		amount = p[2];
		for(var i = start; i <= end; i++){
			sensiblePrizes[i-1] = amount;
		}
	});
	console.log(sensiblePrizes);
	// pick the smallest positive (or zero) diff for first
	// if m people have the same answer, average the [n, n+m] prizes
	var bestGuess, lowDiff, diff;
	var awardedP = guesses.map(i=>0); // zeros for everyone!
	while(sensiblePrizes.length > 0){
		bestGuess = [];
		lowDiff = Infinity;
		for(let i = 0; i < guesses.length; i++){
			debugger;
			if (!!awardedP[i]){ continue; } // guess i already has a prize
			diff = answer - guesses[i];
			if(diff > -1 && diff < lowDiff){
				bestGuess = [i];
			}
			if(diff > -1 && diff == lowDiff){
				bestGuess.push(i);
			}
			// What if there are no positive guesses left, but there are still prizes?
		}
		// Split m=bestGuess.length prizes and take prizes out of consideration
		mwinners = bestGuess.length;
		award = sensiblePrizes.splice(0,mwinners).reduce((a,b)=>a+b) / mwinners;
		for(let i = 0; i < mwinners; i++){
			awardedP[i] = award;
		}
	}
	return awardedP;
}

var prizes = [ [1,1,100], [2,2,50], [3,4,25] ];
var guesses = [65, 70, 78, 65, 72];
var answer = 70;

console.log(awardedPrizes(prizes, guesses, answer));

// [37.5, 100.0, 0.0, 37.5, 25.0]