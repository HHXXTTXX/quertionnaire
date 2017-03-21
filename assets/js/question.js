setTimeout(function sunrise () {
    document.getElementsByClassName('header')[0].style.backgroundColor = '#118798';
}, 0);
function show(s, h) {
setTimeout(function change(){
    document.getElementById(h).style="display:none";
    document.getElementById(s).style="display:";
},500)
}
var boxcheck = false;
function checkval(q, n){
var box = document.getElementsByName(n);
// 获取弹窗
var modal = document.getElementById('myModal');
// 获取 <span> 元素，用于关闭弹窗 that closes the modal
var span = document.getElementsByClassName("close")[0];
for(var i=1; i<=box.length;i++){
    if(box[i-1].checked){
    boxcheck = true;
    break;
    }
}
if(boxcheck === false){
    modal.style.display = "block";
    span.onclick = function() {
    modal.style.display = "none";
    }
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
}else{
    setTimeout(function change(){
    document.getElementById(n).style="display:none";
    document.getElementById(q).style="display:";
    },500)
    boxcheck = false;
}
}
onload=function(){
var e = document.getElementById("refreshed");
if(e.value=="no"){
    e.value="yes";
}
else{
    e.value="no";
    location.reload();
}
}