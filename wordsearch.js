const createSameNumberArray = function(matrix, indexNumber) {
  let array = [];
  for (let i = 0 ; i < matrix.length; i++){
    array.push(matrix[i][indexNumber]);
  }
  return array;
}

const transpose = function (matrix) {
  let result = [];
  for (let i = 0; i < matrix[0].length; i++){
    result.push(createSameNumberArray(matrix, i));
  }
  return result;
};


const wordSearch = (letters, word) => { 
  let overallTruth = false;
  let flippedArray = transpose(letters);
  console.log(flippedArray);
  const horizontalJoin = letters.map(ls => ls.join(''));
  // joins inner array into single words ie new array of (rows made into words)
  // console.log(horizontalJoin);
    // for (l of horizontalJoin) {
    //     if (l.includes(word)) return true
    // }
  let existsHorizontal = false;
  for (l of horizontalJoin) {
    if (l.indexOf(word) !== -1) {
      console.log(l.indexOf(word));
      existsHorizontal = true;
    }
  }

  const verticalJoin = flippedArray.map(ls => ls.join(''));
  let existsvertical = false;
  for (k of verticalJoin) {
    if (k.indexOf(word) !== -1) {
      console.log(k.indexOf(word));
      existsvertical = true;
    }
  }
  if (existsHorizontal || existsvertical) {
    overallTruth = true;
  }
  return overallTruth;
};

// problems to solve:
// array does not search vertically:
// search only succeeds when word length is equal to row length;



module.exports = wordSearch;