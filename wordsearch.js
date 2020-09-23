const transpose = function(matrix) {
    let result = [];
    let list = [];
    for (let i = 0; i < matrix[0].length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        list.push(matrix[j][i]);
      }
      result.push(list);
      list = [];
    }
    return result;
  };

const wordSearch = (letters, word) => { 
    //if this is an empty array
    if (letters.length === 0) {
        return " "
    }
    //horizontally, vertically and backwards
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = transpose(letters).map(el => el.join(''))
    const backwardHorizantalJoin = letters.map(letter => letter.reverse()).map(letter => letter.join(''));
    const backwardVertical = transpose(letters).map(letter => letter.reverse()).map(letter => letter.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }   
    for (x of verticalJoin) {
        if (x.includes(word)) return true
    } 
    for (y of backwardVertical) {
        if (y.includes(word)) return true
    }
    for (z of backwardHorizantalJoin) {
        if (z.includes(word)) return true
    }
    return false
}


//Pair programming Daniel S. and Ozge :)