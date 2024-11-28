const gameBoard =  document.querySelector('#gameBoard');
const infoDisplay = document.querySelector('#info');
const startCells= [
    "" ,  "" ,  "" ,  "" ,  "" ,  "" ,  "" ,  "" ,  ""  ]; 
    let go = "circle";
    infoDisplay.textContent = "circle goes first";

    function createBoard(){
        startCells.forEach((cell, index) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('square');
            cellElement.id = index;
            cellElement.addEventListener('click', addGo);
            /*const circleElement = document.createElement('div');
            circleElement.classList.add('cross');
            cellElement.append(circleElement); */
            gameBoard.append(cellElement);
            });
        }
    
createBoard();
function addGo(e){
    console.log('clicked' ,e );
    const goDisplay = document.createElement('div');
    goDisplay.classList.add(go);
    e.target.append(goDisplay);
    go = go === "circle" ? "cross" : "circle";
    infoDisplay.textContent = go === "circle" ? "circle goes next" : "cross goes next";
    e.target.removeEventListener('click', addGo);
    checkScore();

}
    function checkScore(){
      const allSquares =  document.querySelectorAll('.square');
      console.log(allSquares);
        const winningCombos = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        winningCombos.forEach(array => {
          const circleWins = array.every(cell => allSquares[cell].firstChild?.classList.contains('circle')); 
          if(circleWins){
            infoDisplay.textContent = "circle wins";
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
        }
    }); 
    winningCombos.forEach(array => {
        const crossWins = array.every(cell => allSquares[cell].firstChild?.classList.contains('cross')); 
        if(crossWins){
          infoDisplay.textContent = "cross wins";
          allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));

    }

    })};