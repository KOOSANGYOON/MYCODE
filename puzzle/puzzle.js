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
      arr[i][j].onclick = searchAndSwap;
    }
  }
}

function repeat() {
  var temp = [];
  console.log(this.value, this.id);
  temp = this.id.split("");
  console.log(temp);
}

function searchAndSwap() {
  var temp;
  var sliceName= [];
  sliceName = this.id.split("");
  console.log(sliceName);
  var x = parseInt(sliceName[1]);
  var y = parseInt(sliceName[2]);
  if (x > 0 && arr[x-1][y].innerHTML === "X"){
    //temp = this.value;
    swapX(x, y);
    // this.value = arr[x-1][y].value;
    // arr[x-1][y].value = temp;
    // arr[x][y].innerHTML = arr[x][y].value;
    // arr[x-1][y].innerHTML = arr[x-1][y].value;
  }else if (x < 3 && arr[x+1][y].innerHTML === "X") {
    temp = this.value;
    this.value = arr[x+1][y].value;
    arr[x+1][y].value = temp;
    arr[x][y].innerHTML = arr[x][y].value;
    arr[x+1][y].innerHTML = arr[x+1][y].value;
  }else if (y > 0 && arr[x][y-1].innerHTML === "X") {
    temp = this.value;
    this.value = arr[x][y-1].value;
    arr[x][y-1].value = temp;
    arr[x][y].innerHTML = arr[x][y].value;
    arr[x][y-1].innerHTML = arr[x][y-1].value;
  }else if (y < 3 && arr[x][y+1].innerHTML === "X"){
    temp = this.value;
    this.value = arr[x][y+1].value;
    arr[x][y+1].value = temp;
    arr[x][y].innerHTML = arr[x][y].value;
    arr[x][y+1].innerHTML = arr[x][y+1].value;
  }
}

function swapX(x, y) {
  var temp = this.value;
  this.value = arr[x-1][y].value;
  arr[x-1][y].value = temp;
  arr[x][y].innerHTML = arr[x][y].value;
  arr[x-1][y].innerHTML = arr[x-1][y].value;
}
function swapY(x, y, y2) {
  var temp;
}

var arr = [];

generateArray(arr);
click(arr);
