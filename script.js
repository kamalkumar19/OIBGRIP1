function calci() {
    let a = document.getElementById("result").value
    let b = eval(a)
    document.getElementById("result").value = b
}
function dis(val) {
    document.getElementById("result").value += val
}
function clr() {
    document.getElementById("result").value = ""
}