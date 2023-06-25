// Tres en Linea

/*
  [
    [ X, O, X ],    // string[]
    [ X, O, X ],    // string[]
    [ X, O, X ]     // string[]
  ]
*/

type CellValue = '' | 'X' | 'O'

// Tuple
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
]


const gameBoard: GameBoard = [
  [ 'X', 'O', 'O', ],
  [ 'X', 'O', 'X' ],
  [ 'X', 'O', '' ],
]