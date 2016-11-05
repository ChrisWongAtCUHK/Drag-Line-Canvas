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
	for(var i = 0; i < size; i++){
		var tr = $('<tr>');
		for(var j = 0; j < size; j++){
			tr.append('<td>' + puzzle[j * size + i] + '</td>');		
		}
		gameGrid.append(tr);

	}

	return words;
}


