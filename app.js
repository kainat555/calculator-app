function getNum(num){
    var display = document.getElementById("display");
    display.value += num;
}

function resetBtn(){
    var display = document.getElementById("display");
    display.value = "";
}

function calc(){
    var display = document.getElementById("display");1
    display.value = eval(display.value);
}