var btnContent = document.getElementById('btnContent');
var btn = document.getElementById('launchBtn');

function opacity(){
    btnContent.style.opacity = "1";
    btn.style.opacity = "0";
    btn.disabled = true;
    btn.style.cursor = "auto";
}

function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="user"){
        window.open("game.html")
    }
    else{
        alert("Wrong Password!");   
    }
}

function startAnim(){
    var startAnim = document.getElementById('rocket');
    var btnStart = document.getElementById('startBtn')
    startAnim.style.animationPlayState = 'running';
    btnStart.style.opacity = "0";
    btn.style.cursor = "default";
    btn.disabled = true;
}

function showTxt() {
    var button = document.getElementById('btn1')
    button.style.display = "none";
    window.open("launch.html");
  }