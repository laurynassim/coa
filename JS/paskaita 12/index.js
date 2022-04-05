console.log('pasileido')

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
// console.log(WINNING_COMBINATIONS)
let isFirst = true
let boxes = document.getElementsByClassName('cell');
const winner = document.getElementById("winner")
// console.log(board)

for (let i = 0; i < boxes.length; i++){
   
  boxes[i].addEventListener('click', function onClick() {
    isFirst = !isFirst
    let player = isFirst ? boxes[i].innerHTML = 'x': boxes[i].innerHTML = 'o';














    
  });

}


function checkWin() {
  for (let winCondition of WINNING_COMBINATIONS) {
    if(winCondition.every(w => boxes[w].innerHTML == "x")) {
      winner.innerHTML = "X WON!!!"
      return "x";
    }
    if(winCondition.every(w => boxes[w].innerHTML == "o")) {
      winner.innerHTML = "O WON!!!"
      return "x";
    }
  }
  return "";
}

