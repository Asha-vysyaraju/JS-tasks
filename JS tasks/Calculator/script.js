function dis(val) {
    document.getElementById("display").value += val;
}
function allClr() {
    document.getElementById("display").value = '';
}
function del() {
    let delValue = document.getElementById("display").value;
    document.getElementById("display").value = delValue.toString().slice(0, -1);
}

function solve() {
    let exp = document.getElementById("display").value;
    let result = eval(exp);
    document.getElementById("display").value = result;
}