let numArray = new Array(25);   //数字数组
let divObjArray = new Array(25);    //div数组
let emptyNumber;
var timer;
var curTime = 0;
var timeText = document.getElementById("outputTime");
let startButton = document.getElementById("startButton");//开始按钮
var endButton = document.getElementById("endButton");
for (var i = 0; i < numArray.length; i++) {
    numArray[i] = i;
    divObjArray[i] = document.getElementsByClassName("a")[i];
}
startButton.onclick = function () {
    if (startButton.value == "正在游戏") {
        return;
    }
    startButton.value = "正在游戏";
    // 随机分配数字
    numArray.sort(function () {
        return Math.random() > 0.5 ? 1 : -1;
    });

    // 给div“赋值”
    for (var i = 0; i < divObjArray.length; i++) {
        if (numArray[i] == 24) {
            divObjArray[i].innerHTML = " ";
            divObjArray[i].style.backgroundColor = "#CE93B4";
            continue;
        }
        divObjArray[i].innerHTML = (numArray[i] + 1);
        //divObjArray[i].style.backgroundColor ="#D8A943";
    }
    // 定时器开始计时
    setTimeout(timing, 1000);

    // 同步显示时间文本
    curTime = 0;
    timeText.value = curTime;

}
endButton.onclick = function()
{
    alert("没关系，坚持"+timeText.value + "s也很厉害了");
    location.reload([true]);
}
function timing() {
    curTime++;
    timeText.value = curTime;
    timer = setTimeout(timing, 1000);
}

clickDiv();
function updateEmptyFun() {
    emptyNumber = numArray.indexOf(24);
}

function updatePositionFun(divIndex) {
    if (startButton.innerHTML == "开始游戏") {
        return;
    }
    numArray[emptyNumber] = divObjArray[divIndex].innerHTML;
    numArray[divIndex] = 24;
    divObjArray[emptyNumber].innerHTML = divObjArray[divIndex].innerHTML;
    //divObjArray[emptyNumber].style.backgroundColor = "#D8A943";
    divObjArray[divIndex].innerHTML = "";
    //divObjArray[divIndex].style.backgroundColor = "#CE93B4";

    if (cur == 24) {
        gameOver();
    }
}
function gameOver() {
    if (numArray[24] == 24) {
        for (var j = 0; j < divObjArray.length; j++) {
            if (numArray[j] != j) {
                return;
            }
        }
        alert("通关啦！ 用时：" + timeText.value + "s");
        clearTimeout(timer);
        startButton.value = "开始游戏";
    }
}

function clickDiv() {
    var cur;
    for (var i = 0; i < divObjArray.length; i++) {
        switch (i) {
            case 0: {
                divObjArray[i].onclick = function () {

                    updateEmptyFun();
                    cur = divObjArray.indexOf(this);
                    if (cur + 1 == emptyNumber || cur + 5 == emptyNumber) {
                        if (startButton.value != "开始游戏") {
                            numArray[emptyNumber] = divObjArray[cur].innerHTML;
                            numArray[cur] = 24;
                            divObjArray[emptyNumber].innerHTML = divObjArray[cur].innerHTML;
                            divObjArray[emptyNumber].style.backgroundColor = "#D8A943";
                            divObjArray[cur].innerHTML = "";
                            divObjArray[cur].style.backgroundColor = "#CE93B4";
                        }
                        if (cur == 24) {
                            gameOver();
                        }
                    }
                }
                break;
            }
            case 4: {
                divObjArray[i].onclick = function () {

                    updateEmptyFun();
                    cur = divObjArray.indexOf(this);
                    if (cur - 1 == emptyNumber || cur + 5 == emptyNumber) {
                        if (startButton.value != "开始游戏") {
                            numArray[emptyNumber] = divObjArray[cur].innerHTML;
                            numArray[cur] = 24;
                            divObjArray[emptyNumber].innerHTML = divObjArray[cur].innerHTML;
                            divObjArray[emptyNumber].style.backgroundColor = "#D8A943";
                            divObjArray[cur].innerHTML = "";
                            divObjArray[cur].style.backgroundColor = "#CE93B4";
                            if (cur == 24) {
                                gameOver();
                            }
                        }
                    }
                }
                break;
            }
            case 20: {
                divObjArray[i].onclick = function () {

                    updateEmptyFun();
                    cur = divObjArray.indexOf(this);
                    if (cur + 1 == emptyNumber || cur - 5 == emptyNumber) {
                        if (startButton.value != "开始游戏") {
                            numArray[emptyNumber] = divObjArray[cur].innerHTML;
                            numArray[cur] = 24;
                            divObjArray[emptyNumber].innerHTML = divObjArray[cur].innerHTML;
                            divObjArray[emptyNumber].style.backgroundColor = "#D8A943";
                            divObjArray[cur].innerHTML = "";
                            divObjArray[cur].style.backgroundColor = "#CE93B4";
                            if (cur == 24) {
                                gameOver();
                            }
                        }
                    }
                }
                break;
            }
            case 24: {
                divObjArray[i].onclick = function () {

                    updateEmptyFun();
                    cur = divObjArray.indexOf(this);
                    if (cur - 1 == emptyNumber || cur - 5 == emptyNumber) {
                        if (startButton.value != "开始游戏") {
                            numArray[emptyNumber] = divObjArray[cur].innerHTML;
                            numArray[cur] = 24;
                            divObjArray[emptyNumber].innerHTML = divObjArray[cur].innerHTML;
                            divObjArray[emptyNumber].style.backgroundColor = "#D8A943";
                            divObjArray[cur].innerHTML = "";
                            divObjArray[cur].style.backgroundColor = "#CE93B4";
                            if (cur == 24) {
                                gameOver();
                            }
                        }
                    }
                }
                break;
            }
            case 1: case 2: case 3: {
                divObjArray[i].onclick = function () {

                    updateEmptyFun();
                    cur = divObjArray.indexOf(this);
                    if (cur + 1 == emptyNumber || cur - 1 == emptyNumber || cur + 5 == emptyNumber) {
                        if (startButton.value != "开始游戏") {
                            numArray[emptyNumber] = divObjArray[cur].innerHTML;
                            numArray[cur] = 24;
                            divObjArray[emptyNumber].innerHTML = divObjArray[cur].innerHTML;
                            divObjArray[emptyNumber].style.backgroundColor = "#D8A943";
                            divObjArray[cur].innerHTML = "";
                            divObjArray[curx].style.backgroundColor = "#CE93B4";
                            if (cur == 24) {
                                gameOver();
                            }
                        }
                    }
                }
                break;
            }
            case 21: case 22: case 23: {
                divObjArray[i].onclick = function () {

                    updateEmptyFun();
                    cur = divObjArray.indexOf(this);
                    if (cur + 1 == emptyNumber || cur - 1 == emptyNumber || cur - 5 == emptyNumber) {
                        if (startButton.value != "开始游戏") {
                            numArray[emptyNumber] = divObjArray[cur].innerHTML;
                            numArray[cur] = 24;
                            divObjArray[emptyNumber].innerHTML = divObjArray[cur].innerHTML;
                            divObjArray[emptyNumber].style.backgroundColor = "#D8A943";
                            divObjArray[cur].innerHTML = "";
                            divObjArray[cur].style.backgroundColor = "#CE93B4";
                            if (cur == 24) {
                                gameOver();
                            }
                        }
                    }
                }
                break;
            }
            case 9: case 14: case 19: {
                divObjArray[i].onclick = function () {

                    updateEmptyFun();
                    cur = divObjArray.indexOf(this);
                    if (cur + 5 == emptyNumber || cur - 1 == emptyNumber || cur - 5 == emptyNumber) {
                        if (startButton.value != "开始游戏") {
                            numArray[emptyNumber] = divObjArray[cur].innerHTML;
                            numArray[cur] = 24;
                            divObjArray[emptyNumber].innerHTML = divObjArray[cur].innerHTML;
                            divObjArray[emptyNumber].style.backgroundColor = "#D8A943";
                            divObjArray[cur].innerHTML = "";
                            divObjArray[cur].style.backgroundColor = "#CE93B4";
                            if (cur == 24) {
                                gameOver();
                            }
                        }
                    }
                }
                break;
            }
            case 5: case 10: case 15: {
                divObjArray[i].onclick = function () {

                    updateEmptyFun();
                    cur = divObjArray.indexOf(this);
                    if (cur + 5 == emptyNumber || cur + 1 == emptyNumber || cur - 5 == emptyNumber) {
                        if (startButton.value != "开始游戏") {
                            numArray[emptyNumber] = divObjArray[cur].innerHTML;
                            numArray[cur] = 24;
                            divObjArray[emptyNumber].innerHTML = divObjArray[cur].innerHTML;
                            divObjArray[emptyNumber].style.backgroundColor = "#D8A943";
                            divObjArray[cur].innerHTML = "";
                            divObjArray[cur].style.backgroundColor = "#CE93B4";
                            if (cur == 24) {
                                gameOver();
                            }
                        }
                    }
                }
                break;
            }
            default: {
                divObjArray[i].onclick = function () {

                    emptyNumber = numArray.indexOf(24);
                    cur = divObjArray.indexOf(this);
                    if (cur + 1 == emptyNumber || cur + 5 == emptyNumber || cur - 1 == emptyNumber || cur - 5 == emptyNumber) {
                        if (startButton.value != "开始游戏") {
                            numArray[emptyNumber] = divObjArray[cur].innerHTML;
                            numArray[cur] = 24;
                            divObjArray[emptyNumber].innerHTML = divObjArray[cur].innerHTML;
                            divObjArray[emptyNumber].style.backgroundColor = "#D8A943";
                            divObjArray[cur].innerHTML = "";
                            divObjArray[cur].style.backgroundColor = "#CE93B4";
                            if (cur == 24) {
                                gameOver();
                            }
                        }
                    }
                }
            }

        }
    }
}

