
let global = {
    textLeft01: false,
    textRight01: false,
    textMiddle01: false
}
window.onload = function(){
    document.getElementById('diary-page').innerHTML = localStorage.getItem("pageContent");
    start();
}
function start() {
    checkData();
}
function checkData() {
    var len = document.getElementsByClassName('icon').length;
    for(var i=0;i<len;i++) {
        if(document.getElementsByClassName('icon')[i].className.match('active')){
            var a = document.getElementsByClassName('icon')[i].id;
            a = a.toString();
            switch(a){
                case 'textLeft01':global.textLeft01 = true;break;
                case 'textRight01':global.textRight01 = true;break;
                case 'textMiddle01':global.textMiddle01 = true;break;
            }
        }
    }
}
function addData() {
    checkData();
    var cl = "";
    if(global.textLeft01) {
        cl += " textLeft01";
    }
    if(global.textMiddle01) {
        cl += " textMiddle01";
    }
    if(global.textRight01) {
        cl += " textRight01";
    } 
    var newContent = document.getElementById('src-input').value;
    var el = document.createElement('span');
    el.setAttribute('class',cl);
    el.appendChild(newContent);
    document.getElementById('diary-page').appendChild(el);
    localStorage.setItem("pageContent",pageContent);
    document.getElementById("page-diary").innerHTML = localStorage.getItem("pageContent");
}
function openControllerBox() {   
    var a = document.getElementyById("controllerBox");
    if(a.style.display == 'none') {
        a.style.display = 'block';
    }
}
function button(e) {
    if(e.currentTarget.className.match('icon01')) {
        var len = document.getElementsByClassName('icon01').length;
        for(var i = 0;i<len;i++) {
            document.getElementsByClassName('icon01')[i].className = e.currentTarget.className.replace('active','var');
        }
        e.currentTarget.className = e.currentTarget.className.replace('var','active');
    }
}