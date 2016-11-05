/*
 *	Get a single letter from the grid
 * */
function getCellLetter($gameGrid, x, y){
	var letter = $($gameGrid[y * $gameGrid.totalRow + x])[0].innerHTML;
	return letter;
}

/*
 *	Get the word, there are 8 directions
 * */
function getWord($gameGrid, startCell, endCell){
	var word = '';
	if(startCell.x == endCell.x && startCell.y > endCell.y){
		// up
		for(var j = startCell.y; j >= endCell.y; j--){
			word += getCellLetter($gameGrid, startCell.x, j);
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
function isWordInList(word, words){
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
function isMatch($gameGrid, words, startCell, endCell){
	var word = getWord($gameGrid, startCell, endCell);
	if(isWordInList(word, words)){
		return true;
	}
	return false;
}
