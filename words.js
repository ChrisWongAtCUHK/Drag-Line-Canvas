/*
 *			+ + + + + + + + + +  
 *			+ + t + e + + + + +  
 *			+ + a p p l e + + +  
 *			+ + c + + + g + + +  
 *			+ + + + d + + n + +  
 *			+ + + + o + g + u +  
 *			+ + e g g + + i + j  
 *			+ c + + + + y + r +  
 *			i + + e m o h + + l  
 *			+ + + + b + + + + +  
 *
 *
 * */

/*
 * Start the words
 * */
function startWords(){
	var words = ['apple', 'boy', 'cat', 'dog', 'egg', 'girl', 'home', 'ice', 'jungle'];
	return words;
}

/*
 * Start the puzzle 
 */
function startPuzzle(){
	var puzzle = 
		[
			'+', '+', '+', '+', '+', '+', '+', '+', '+', '+',  
			'+', '+', 't', '+', 'e', '+', '+', '+', '+', '+',  
			'+', '+', 'a', 'p', 'p', 'l', 'e', '+', '+', '+',  
			'+', '+', 'c', '+', '+', '+', 'g', '+', '+', '+',  
			'+', '+', '+', '+', 'd', '+', '+', 'n', '+', '+',  
			'+', '+', '+', '+', 'o', '+', 'g', '+', 'u', '+',  
			'+', '+', 'e', 'g', 'g', '+', '+', 'i', '+', 'j',  
			'+', 'c', '+', '+', '+', '+', 'y', '+', 'r', '+',  
			'i', '+', '+', 'e', 'm', 'o', 'h', '+', '+', 'l',  
			'+', '+', '+', '+', 'b', '+', '+', '+', '+', '+'  
		];

	var gameGrid = $('#gameGrid tbody');
	var size = 10;
	for(var i = 0; i < size; i++){
		var tr = $('<tr>');
		for(var j = 0; j < size; j++){
			tr.append('<td>' + puzzle[j * size + i] + '</td>');		
		}
		gameGrid.append(tr);

	}
}

function getCellLetter(cell){
	var letter = $($('#gameGrid td')[cell.y * 10 + cell.x])[0].innerHTML;
	return letter;
}

/*
 *
 * */
function isMatch(startCell, endCell){
	var startLetter = getCellLetter(startCell);
	console.log(startLetter);
	var endLetter = getCellLetter(endCell);
	console.log(endLetter);
	return true;
}
