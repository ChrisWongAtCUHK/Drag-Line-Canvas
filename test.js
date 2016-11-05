/*
 * Start the puzzle 
 */
function startPuzzle(){
	var words = ['apple', 'boy', 'cat', 'dog', 'egg', 'girl', 'home', 'ice', 'jungle'];
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
	for(var row = 0; row < size; row++){
		var tr = $('<tr>');
		for(var col = 0; col < size; col++){
			tr.append('<td>' + puzzle[row * size + col] + '</td>');		
		}
		gameGrid.append(tr);

	}

	return words;
}


