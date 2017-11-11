function generateArray(arr) {
  for (var i = 0; i < 4; i++) {
    arr[i] = [];
    for (var j = 0; j < 4; j++) {
      if (i === 3 && j === 3) {
        document.getElementById('n'+i+j).value = "X";
        arr[i][j] = document.getElementById('n'+i+j);
        document.getElementById('n'+i+j).innerHTML = document.getElementById('n'+i+j).value;
        break;
      }else {
        document.getElementById('n'+i+j).value = i * 4 + j + 1;
        arr[i][j] = document.getElementById('n'+i+j);
        document.getElementById('n'+i+j).innerHTML = document.getElementById('n'+i+j).value;
      }
    }
    console.log(arr[i]);
  }
}

function click(arr) {
  // arr.onclick = repeat;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      arr[i][j].onclick = search;
    }
  }
}

function search() {
  var temp;
  var sliceName= [];
  sliceName = this.id.split("");
  console.log(sliceName);
  var x = parseInt(sliceName[1]);
  var y = parseInt(sliceName[2]);
  if (x > 0 && arr[x-1][y].innerHTML === "X"){
    swapX(x, y, x - 1);
  }else if (x < 3 && arr[x+1][y].innerHTML === "X") {
    swapX(x, y, x + 1);
  }else if (y > 0 && arr[x][y-1].innerHTML === "X") {
    swapY(x, y, y - 1);
  }else if (y < 3 && arr[x][y+1].innerHTML === "X"){
    swapY(x, y, y + 1);
  }
}

function swapX(x, y, x2) {
  var temp = arr[x][y].value;
  arr[x][y].value = arr[x2][y].value;
  arr[x2][y].value = temp;
  arr[x][y].innerHTML = arr[x][y].value;
  arr[x2][y].innerHTML = arr[x2][y].value;
  countNum += 1;
}
function swapY(x, y, y2) {
  var temp = arr[x][y].value;
  arr[x][y].value = arr[x][y2].value;
  arr[x][y2].value = temp;
  arr[x][y].innerHTML = arr[x][y].value;
  arr[x][y2].innerHTML = arr[x][y2].value;
  countNum += 1;
}

function randomSwap(arr, x, y, count) {
  if (count <= 0) {
    return;
  }else {
    var nextPos = chooseSwapPos(x, y);

    if (nextPos === 0) {
      randomSwap(arr, x, y, count - 1);
    }else if (nextPos === 1) {
      randomSwap(arr, x - 1, y, count - 1);
    }else if (nextPos === 2) {
      randomSwap(arr, x + 1, y, count - 1);
    }else if (nextPos === 3) {
      randomSwap(arr, x, y - 1, count - 1);
    }else if (nextPos === 4) {
      randomSwap(arr, x, y + 1, count - 1);
    }
  }
}

function chooseSwapPos(x, y) {
  var posNum = parseInt(Math.ceil(Math.random() * 4));
  if (posNum === 1) {   //UP
    if (x - 1 < 0) {
      return 0;
    }
    swapX(x, y, x - 1);
    return 1;
  }else if (posNum === 2) {   //DOWN
    if (x + 1 > 3) {
      return 0;
    }
    swapX(x, y, x + 1);
    return 2;
  }else if (posNum === 3) {   //LEFT
    if (y - 1 < 0) {
      return 0;
    }
    swapY(x, y, y - 1);
    return 3;
  }else if (posNum === 4) {   //RIGHT
    if (y + 1 > 3) {
      return 0;
    }
    swapY(x, y, y + 1);
    return 4;
  }
}

var arr = [];

generateArray(arr);

var countNum = 0;
var resultStr = document.getElementById(moveNum);
resultStr = countNum;

randomSwap(arr, 3, 3, 100);
click(arr);



// #n33 {
//   color: #2979FF;
//   background-color: #2979FF;
//   display: inline-block;
//   font-size: 80px;
//   text-align: center;
//   height: 80px;
//   width: 80px;
//   border: solid #222;
//   border-width: 0px;
// }
