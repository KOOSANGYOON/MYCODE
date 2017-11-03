//-----------------------------------------------------------
//시작수부터 끝수까지 일렬로 나열

var printNum = function(start, end) { //시작 수, 끝 수를 입력받아 문자열로 출력해주는 함수
  if (start > end) {
    alert("[ERROR] 시작값이 끝값보다 클 수 없습니다.");
  } else {
    var result = "";
    for (var i = 0; i < end - start + 1; i++) {
      if (i != 0) {
        result = result + " " + (start + i);
      } else {
        result = result + (start + i);
      }
    }
    console.log(result);
  }
};

var startNum = parseInt(prompt("시작 수를 입력해주세요."));
var endNum = parseInt(prompt("끝 수를 입력해주세요."));

printNum(startNum, endNum);

//-----------------------------------------------------------
//4개씩 나열하기

var printNum = function(num) {
  for (var i = 0; i < num; i++) {
    var result = "";
    for (var j = 1; j <= num; j++) {
      if (j % num != 0) {
        result = result + (num * i + j) + " ";
      } else {
        result = result + (num * i + j) + " ";
        console.log(result);
      }
    }
  }
};

var inputNum = parseInt(prompt("숫자를 입력해 주세요."));

printNum(inputNum);

//-----------------------------------------------------------
//N X N 배열을 M 단위로 나눠 출력

var printNum = function(length, space) {
  for (var i = 1; i <= length; i++) {
    var result = "";
    var k = (i * space) - (space - 1);
    for (var j = 1; j <= length; j++) {
      if (j % length != 0) {
        result = result + (k + space * (j - 1)) + " ";
      } else {
        result = result + (k + space * (j - 1)) + " ";
        console.log(result);
      }
    }
  }
};

var inputLength = parseInt(prompt("길이를 얼마나 나열할까요?"));
var inputSpace = parseInt(prompt("각 수의 간격은 몇으로 할까요?"));

printNum(inputLength, inputSpace);

//-----------------------------------------------------------
//뱀처럼 꼬불꼬불 나열

var printNum = function(length) {
  for (var i = 0; i < length; i++) {
    var result = "";

    if (i % 2 === 0) {
      for (var j = 1; j <= length; j++) {
        if (j % length != 0) {
          result = result + ((length * i) + j) + " ";
        } else {
          result = result + ((length * i) + j) + " ";
          console.log(result);
        }
      }
    } else {
      for (var j = 1; j <= length; j++) {
        if (j % length != 0) {
          result = result + (length * (i + 1) - (j - 1)) + " ";
        } else {
          result = result + (length * (i + 1) - (j - 1)) + " ";;
          console.log(result);
        }
      }
    }
  }
};

var inputLength = parseInt(prompt("가로, 세로 길이를 얼마나 나열할까요?"));

printNum(inputLength);

//-----------------------------------------------------------
//직각 삼각형으로 쌓기 (배열사용)

var printNum = function(num) {
  for (var i = 1; i <= num; i++) {
    var result = [];
    for (var j = 0; j < num; j++) {
      var k = j + 1;
      if (j < i) {
        result.push(k);
      }
    }
    console.log(result);
  }
};

var inputLength = parseInt(prompt("몇 층으로 나열할까요?"));

printNum(inputLength);

//-----------------------------------------------------------
//두 수의 차이를 입력 받아 2열로 나열하기

var printNum = function(num) {
  var result = [];

  for (var i = 0; i <= num; i++) {
    var resultNum = num - i;
    result.push(resultNum);
    result.push(i);

    console.log(result);

    result.pop();
    result.pop();
  }
};

var inputNum = parseInt(prompt("숫자를 입력하세요."));

printNum(inputNum);

//-----------------------------------------------------------
//나선형으로 숫자 찍기

/*
00 01 02 03 04
10 11 12 13 14
20 21 22 23 24
30 31 32 33 34
40 41 42 43 44
*/

var makeList = function(list, sizeNum) {  //배열 초기화 함수1
  for(var i = 0; i < sizeNum; i++) {
    list[i] = new Array(sizeNum);
  }
  for(var i = 0; i < sizeNum; i++) {
    for(var j = 0; j < sizeNum; j++) {
      list[i][j] = 0;
    }
  }
};

//좌에서 우로 숫자 채워주는 함수
var leftToRight = function(list, horNum, verNum, countNum) {
  console.log("바퀴시작");
  var range = list.length - horNum;
  for(var i = verNum; i < range; i++) {
    if (list[horNum][i] !== 0){
      console.log("111111");
      return 0;
    }else {
      list[horNum][i] = countNum;
      countNum++;
      console.log(list);
    }
  }
  verNum = i - 1;
  horNum ++;
  if (list[horNum][verNum] !== 0) {
    return 0;
  }else {
    upToDown(list, horNum, verNum, countNum);
  }
};

//위에서 아래로 숫자 채워주는 함수
var upToDown = function(list, horNum, verNum, countNum) {
  var range = 1 + verNum;
  for(var i = horNum; i < range; i++) {
    if (list[i][verNum] !== 0){
      return 0;
    }else {
      list[i][verNum] = countNum;
      countNum++;
      console.log(list);
    }
  }
  verNum --;
  horNum = i - 1;
  rightToLeft(list, horNum, verNum, countNum);
};

//우에서 좌로 숫자 채워주는 함수
var rightToLeft = function(list, horNum, verNum, countNum) {
  var range = list.length - (1 + horNum);
  for(var i = verNum; i >= range; i--) {
    if (list[horNum][i] !== 0){
      return 0;
    }else {
      list[horNum][i] = countNum;
      countNum++;
      console.log(list);
    }
  }
  verNum = i + 1;
  horNum --;
  downToUp(list, horNum, verNum, countNum);
};

//아래에서 위로 숫자 채워주는 함수
var downToUp = function(list, horNum, verNum, countNum) {
  var range = (1 + verNum);
  var l = 0;
  for(var i = horNum; i >= range; i--) {
    if (list[i][verNum] !== 0){
      //console.log(l);
      return 0;
    }else {
      list[i][verNum] = countNum;
      countNum++;
      console.log(list);
    }
  }
  verNum ++;
  horNum = i + 1;
  leftToRight(list, horNum, verNum, countNum);
};

//-----main program start-----
var size = 6;   //parseInt(prompt("사이즈를 입력해주세요."));
var list = [];
makeList(list, size);
//console.log(list);
leftToRight(list, 0, 0, 1);

var resultList = list.join("\n");
console.log(resultList);

/*
- INPUT = 3

- OUTPUT :
1,2,3
8,9,4
7,6,5
*/

/*
- INPUT = 4

- OUTPUT :
1,2,3,4
12,13,14,5
11,16,15,6
10,9,8,7
*/

/*
- INPUT = 5

- OUTPUT :
1,2,3,4,5
16,17,18,19,6
15,24,25,20,7
14,23,22,21,8
13,12,11,10,9
*/

/*
- INPUT = 6

- OUTPUT :
20,21,22,23,24,7
19,32,33,34,25,8
18,31,36,35,26,9
17,30,29,28,27,10
16,15,14,13,12,11
*/
