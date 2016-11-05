var words;

/*
 * Start the puzzle 
 */
function startPuzzle(){
	words = ['apple', 'boy', 'cat', 'dog', 'egg', 'girl', 'home', 'ice', 'jungle'];
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

/*
 *	Get a single letter from the grid
 * */
function getCellLetter(gameGrid, x, y){
	var letter = $(gameGrid[y * 10 + x])[0].innerHTML;
	return letter;
}

/*
 *	Get the word, there are 8 directions
 * */
function getWord(gameGrid, startCell, endCell){
	var word = '';
	if(startCell.x == endCell.x && startCell.y > endCell.y){
		// up
		for(var j = startCell.y; j >= endCell.y; j--){
			word += getCellLetter(gameGrid, startCell.x, j);
		}
	} else if(startCell.x < endCell.x && startCell.y > endCell.y){
		// up-right
		return 1;
	} else if(startCell.x < endCell.x && startCell.y == endCell.y){
		// right
		return 2;
	} else if(startCell.x < endCell.x && startCell.y < endCell.y){
		// down-right
		return 3;
	} else if(startCell.x == endCell.x && startCell.y < endCell.y){
		// down
		return 4;
	} else if(startCell.x < endCell.x && startCell.y < endCell.y){
		// down-left
		return 5;
	} else if(startCell.x < endCell.x && startCell.y == endCell.y){
		// left
		return 6;
	} else if(startCell.x < endCell.x && startCell.y > endCell.y){
		// up-left
		return 7;
	}
	return word;
}

/*
 *	Check if the word is in list, remove it if it is found
 * */
function isWordInList(word){
	for(var i = 0; i < words.length; i++){
		if(word == words[i]){
			words.splice(i ,1);
			return true;
		}
	}
}

/*
 *	Deter if the word is matched
 * */
function isMatch(startCell, endCell){
	var gameGrid = $('#gameGrid td');
	var word = getWord(gameGrid, startCell, endCell);
	if(isWordInList(word)){
		return true;
	}
	return false;
}
