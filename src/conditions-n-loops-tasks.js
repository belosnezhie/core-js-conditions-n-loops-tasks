/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  const str = number.toString();
  if (str.includes('-')) {
    return false;
  }
  return true;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = 0;
  if (a > b) {
    max = a;
  } else {
    max = b;
  }
  if (c > max) {
    return c;
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    if (a === b || a === c || c === b) {
      return true;
    }
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const romanDigits = [
    { key: 10, value: 'X' },
    { key: 9, value: 'IX' },
    { key: 6, value: 'VI' },
    { key: 5, value: 'V' },
    { key: 4, value: 'IV' },
    { key: 1, value: 'I' },
  ];

  let result = '';
  let copyOfNumber = num;
  let romanIndex = 0;

  while (copyOfNumber > 0) {
    while (romanDigits[romanIndex].key > copyOfNumber) {
      romanIndex += 1;
    }
    result += romanDigits[romanIndex].value;
    copyOfNumber -= romanDigits[romanIndex].key;
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  for (let digitIndex = 0; digitIndex < numberStr.length; digitIndex += 1) {
    switch (numberStr[digitIndex]) {
      case '0':
        result += 'zero';
        break;
      case '1':
        result += 'one';
        break;
      case '2':
        result += 'two';
        break;
      case '3':
        result += 'three';
        break;
      case '4':
        result += 'four';
        break;
      case '6':
        result += 'six';
        break;
      case '5':
        result += 'five';
        break;
      case '7':
        result += 'seven';
        break;
      case '8':
        result += 'eight';
        break;
      case '9':
        result += 'nine';
        break;
      case '-':
        result += 'minus';
        break;
      case '.':
        result += 'point';
        break;
      case ',':
        result += 'point';
        break;
      default:
        break;
    }
    if (digitIndex + 1 !== numberStr.length) {
      result += ' ';
    }
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let isStrPalindrome = true;
  const lenght = str.length;

  for (let i = 0; i < lenght; i += 1) {
    if (str[i] === str[lenght - 1 - i]) {
      isStrPalindrome = true;
    } else {
      isStrPalindrome = false;
      break;
    }
  }
  return isStrPalindrome;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let index = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      index = i;
    }
  }
  return index;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const numberInStr = `${num}`;
  let isContaining = false;
  for (let i = 0; i < numberInStr.length; i += 1) {
    if (Number(numberInStr[i]) === digit) {
      isContaining = true;
    }
  }
  return isContaining;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(/* arr */) {
  throw new Error('Not implemented');
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];
  for (let rows = 0; rows < size; rows += 1) {
    arr[rows] = [];
    for (let columns = 0; columns < size; columns += 1) {
      arr[rows][columns] = 0;
    }
  }

  let digit = 1;
  let columnBeginner = 0;
  let columnEnding = size - 1;
  let rowBeginner = 0;
  let rowEnding = size - 1;

  while (columnBeginner <= columnEnding && rowBeginner <= rowEnding) {
    for (let i = columnBeginner; i <= columnEnding; i += 1) {
      arr[rowBeginner][i] = digit;
      digit += 1;
    }
    rowBeginner += 1;

    for (let i = rowBeginner; i <= rowEnding; i += 1) {
      arr[i][columnEnding] = digit;
      digit += 1;
    }
    columnEnding -= 1;

    for (let i = columnEnding; i >= columnBeginner; i -= 1) {
      arr[rowEnding][i] = digit;
      digit += 1;
    }
    rowEnding -= 1;

    for (let i = rowEnding; i >= rowBeginner; i -= 1) {
      arr[i][columnBeginner] = digit;
      digit += 1;
    }
    columnBeginner += 1;
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const workMatrix = matrix;

  const matrixLength = matrix.length;
  const matrixHeight = matrix[0].length;

  const copyMatrix = [];
  for (let rows = 0; rows < matrixLength; rows += 1) {
    copyMatrix[rows] = [];
    for (let columns = 0; columns < matrixHeight; columns += 1) {
      copyMatrix[rows][columns] = 0;
    }
  }

  for (let i = 0; i < matrixLength; i += 1) {
    for (let j = 0; j < matrixHeight; j += 1) {
      copyMatrix[j][i] = matrix[matrixLength - 1 - i][j];
    }
  }

  for (let rows = 0; rows < matrixLength; rows += 1) {
    for (let columns = 0; columns < matrixHeight; columns += 1) {
      workMatrix[rows][columns] = copyMatrix[rows][columns];
    }
  }
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const workArr = arr;
  let begin = -1;
  let end = arr.length - 2;
  let isSwapped = true;
  while (isSwapped) {
    isSwapped = false;
    begin += 1;
    let buffer = 0;
    for (let i = begin; i <= end; i += 1) {
      if (workArr[i] > workArr[i + 1]) {
        buffer = workArr[i];
        workArr[i] = workArr[i + 1];
        workArr[i + 1] = buffer;
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
    isSwapped = false;
    end -= 1;
    for (let i = end; i >= begin; i -= 1) {
      if (workArr[i] > workArr[i + 1]) {
        buffer = workArr[i];
        workArr[i] = workArr[i + 1];
        workArr[i + 1] = buffer;
        isSwapped = true;
      }
    }
  }
  return workArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let j = iterations;
  let oddStr = '';
  let evenStr = '';
  let result = str;
  let currentResult = '';
  let allOptions = result;
  while (j > 0) {
    for (let i = 0; i < result.length; i += 1) {
      if (i % 2 !== 0) {
        oddStr += result[i];
      } else {
        evenStr += result[i];
      }
    }
    currentResult = evenStr + oddStr;
    if (currentResult === str) {
      break;
    }
    allOptions = `${allOptions},${currentResult}`;
    result = evenStr + oddStr;
    oddStr = '';
    evenStr = '';
    j -= 1;
  }
  const arr = allOptions.split(',');
  const index = iterations % arr.length;
  return arr[index];
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
