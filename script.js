// const model = {
//     app:{
//         checkersPage,
//     },
//     input:{

//     },
//     data:{
//         board:{
//             whiteTiles:"",
//             blackTiles:"",
//         },
//         pieces:{
//             black:"",
//             white:"",
//         },
//     },
// }


updateView();
function updateView(){
    document.getElementById("checkers").innerHTML= /*HTML*/`
    
    <h1> Checkers </h1>

    <div id="checkersboard"></div>

  `;
  checkersboard();
}

function checkersboard(){
    let board = document.getElementById('checkersboard');
    for (let i = 0; i < 8; i++){
        for (let j = 0; j < 8; j++){
            let checkersSquare = document.createElement('div');
            checkersSquare.className =  'checkers-square';
            if ((i + j) % 2 == 0){
                checkersSquare.style.backgroundColor = 'rgb(100, 100, 100)';
            }
            board.appendChild(checkersSquare);
        }
    }
}