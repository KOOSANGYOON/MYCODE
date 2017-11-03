//--------------------------------------------
//직각삼각형

var inputNum = prompt("몇 줄?");

for (i = 0; i < inputNum; i++) {
  var point = "";
  for (j = 0; j < inputNum; j++) {
    if (j <= i) {
      point = point + "*";
    } else {
      point = point + " ";
    }
  }
  console.log(point);
  console.log("\n");
}

//--------------------------------------------
//직각삼각형 좌우대칭

var inputNum = prompt("몇 줄?");

for (i = 0; i < inputNum; i++) {
  var point = "";
  for (j = 0; j < inputNum; j++) {
    if (j <= i) {
      point = point + "*";
    } else {
      point = point + " ";
    }
  }
  console.log(point);
  console.log("\n");
}
//--------------------------------------------
//이등변삼각형


var inputNum = prompt("몇 줄?");

for (i = 0; i < inputNum; i++) {
  var point = "";
  for (j = inputNum; j >= 0; j--) {
    if (j <= i) {
      point = point + "*";
    } else {
      point = point + " ";
    }
  }
  for (j = 1; j < inputNum; j++) {
    if (j <= i) {
      point = point + "*";
    } else {
      point = point + " ";
    }
  }
  console.log(point);
  console.log("\n");
}
//--------------------------------------------
//다이아몬드

var inputNum = prompt("몇 줄?");

for (i = 0; i < inputNum; i++) {
  var point = "";
  for (j = inputNum; j >= 0; j--) {
    if (j <= i) {
      point = point + "*";
    } else {
      point = point + " ";
    }
  }
  for (j = 1; j < inputNum; j++) {
    if (j <= i) {
      point = point + "*";
    } else {
      point = point + " ";
    }
  }
  console.log(point);
  console.log("\n");
}
for (i = 1; i < inputNum; i++) {
  var point = " ";
  for (j = 0; j < inputNum; j++) {
    if (j >= i) {
      point = point + "*";
    } else {
      point = point + " ";
    }
  }
  for (j = inputNum - 1; j >= 0; j--) {
    if (j <= i) {
      point = point + " ";
    } else {
      point = point + "*";
    }
  }
  console.log(point);
  console.log("\n");
}
//--------------------------------------------
//속이 빈 사각형

var inputNum = parseInt(prompt("숫자를 입력해 주세요."));

for (var i = 1; i <= inputNum; i++) {
  var result = "";
  for (var j = 1; j <= inputNum; j++) {
    if (i === 1 || i === inputNum) {
      result = result + "*";
    } else {
      if (j === 1 || j === inputNum) {
        result = result + "*";
      } else {
        result = result + " ";
      }
    }
  }
  console.log(result);
}

//--------------------------------------------
//속이 빈 다이아몬드

var inputNum = parseInt(prompt("몇 줄?"));

for (var i = 0; i < inputNum; i++) {
  var point = "";
  for (var j = inputNum - 1; j >= 0; j--) {
    if (j > i) {
      point = point + " ";
    } else if (j < i) {
      point = point + " ";
    } else {
      point = point + "*";
    }
  }
  for (var j = 1; j < inputNum; j++) {
    if (j > i) {
      point = point + " ";
    } else if (j < i) {
      point = point + " ";
    } else {
      point = point + "*";
    }
  }
  console.log(point);
  console.log("\n");
}

for (var i = 1; i < inputNum; i++) {
  var point = "";
  for (var j = 0; j < inputNum; j++) {
    if (j === i) {
      point = point + "*";
    } else {
      point = point + " ";
    }
  }
  for (var j = inputNum - 2; j >= 0; j--) {
    if (j === i) {
      point = point + "*";
    } else {
      point = point + " ";
    }
  }
  console.log(point);
  console.log("\n");
}
//--------------------------------------------
//7. 모래시계

var inputNum = parseInt(prompt("몇 줄?"));

for (var i = 0; i < inputNum; i++) {
  var point = "";
  for (var j = 0; j < inputNum; j++) {
    if (i != 0) {
      if (j === i) {
        point = point + "*";
      } else {
        point = point + " ";
      }
    } else {
      if (j >= i) {
        point = point + "*";
      }
    }
  }

  if (i === 0) {
    point = point + "*";
  }

  for (var j = inputNum - 1; j >= 0; j--) {
    if (i != 0) {
      if (j === i) {
        point = point + " *";
      } else {
        point = point + " ";
      }
    } else {
      point = point + "*";
    }
  }
  console.log(point);
  console.log("\n");
}

for (var i = 0; i < inputNum; i++) {
  var point = "";
  for (var j = inputNum - 1; j >= 0; j--) {
    if (i != inputNum - 1) {
      if (j === i) {
        point = point + "*";
      } else {
        point = point + " ";
      }
    } else {
      point = point + "*";
    }
  }
  if (i === inputNum - 1) {
    point = point + "*";
  }

  for (var j = 0; j < inputNum; j++) {
    if (i != inputNum - 1) {
      if (j === i) {
        point = point + " *";
      } else {
        point = point + " ";
      }
    } else {
      point = point + "*";
    }
  }
  console.log(point);
  console.log("\n");
}
//--------------------------------------------
//원

var square = function(length) { //반지름을 제곱해주는 함수(피타고라스 공식에 쓰임)
  var squareLength = length * length;
  return squareLength;
};


var inputNum = parseInt(prompt("반지름 몇? (짝수만 가능)"));
var sqNum = square(inputNum);

if (inputNum % 2 === 0 && inputNum >= 2) {
  for (var i = 0; i <= inputNum; i++) {
    var point = "";
    for (var j = 0; j <= inputNum; j++) {
      if (square(inputNum - i) + square(inputNum - j) <= sqNum) {
        point = point + "* ";
      } else {
        point = point + "  ";
      }
    }
    for (var j = 0; j <= inputNum; j++) {
      if (square(inputNum - i) + square(j) <= sqNum) {
        point = point + "* ";
      } else {
        point = point + " ";
      }
    }
    console.log(point);
    // console.log("\n");
  }
  for (var i = 0; i <= inputNum; i++) {
    var point = "";
    for (var j = 0; j <= inputNum; j++) {
      if (square(i) + square(inputNum - j) <= sqNum) {
        point = point + "* ";
      } else {
        point = point + "  ";
      }
    }
    for (var j = 0; j <= inputNum; j++) {
      if (square(i) + square(j) <= sqNum) {
        point = point + "* ";
      } else {
        point = point + " ";
      }
    }
    console.log(point);
  }
} else {
  alert("잘못 입력하셨습니다. (ㅠ.,ㅠ) 짝수만 입력해 주세요.");
}

//--------------------------------------------
//하트

var square = function(length) { //반지름을 제곱해주는 함수(피타고라스 공식에 쓰임)
  var squareLength = length * length;
  return squareLength;
};

var inputNum = parseInt(prompt("크기를 입력해주세요. (0 ~ 7)"));
var sqNum = square(inputNum);

if (inputNum >= 1 && inputNum <= 7) {
  for (var i = 0; i <= inputNum; i++) {
    var point = "";
    for (var j = 0; j <= inputNum; j++) {
      if (square(inputNum - i) + square(inputNum - j) <= sqNum) {
        point = point + "* ";
      } else {
        point = point + "  ";
      }
    }
    for (var j = 0; j <= inputNum; j++) {
      if (square(inputNum - i) + square(j) <= sqNum) {
        point = point + "* ";
      } else {
        point = point + "  ";
      }
    }
    for (var j = 0; j <= inputNum; j++) {
      if (square(inputNum - i) + square(inputNum - j) <= sqNum) {
        point = point + "* ";
      } else {
        point = point + "  ";
      }
    }
    for (var j = 0; j <= inputNum; j++) {
      if (square(inputNum - i) + square(j) <= sqNum) {
        point = point + "* ";
      } else {
        point = point + "  ";
      }
    }
    console.log(point);
  }

  for (var i = 0; i <= inputNum * 2 + 1; i++) {
    var point = "";
    for (var j = 0; j <= inputNum * 2 + 1; j++) {
      if (j >= i) {
        point = point + "* ";
      } else {
        point = point + "  ";
      }
    }
    for (var j = inputNum * 2 + 1; j >= 0; j--) {
      if (j >= i) {
        point = point + "* ";
      } else {
        point = point + "  ";
      }
    }
    console.log(point);
  }
}else {
  alert("범위를 초과하셨습니다. ㅜ.,ㅜ");
}
