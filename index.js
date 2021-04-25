//var aaaaa = new Audio();
//aaaaa.src = "aaaa.mp3";
//var guh_huh = new Audio("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
//guh_huh.src = "Cranberry Animated - Sprite Cranberry TV Commercial, Featuring LeBron James.mp3"
var bbbbb = new Audio();
bbbbb.src = "";
var ccccc = new Audio();
ccccc.src = "";
var ddddd = new Audio();
ddddd.src = "";
var eeeee = new Audio();
eeeee.src = "";
var fffff = new Audio();
fffff.src = "";
var ggggg = new Audio();
ggggg.src = "";

var muteToggle = document.getElementById("soundToggle").checked;

function soundPlayA(){
    if (document.getElementById("soundToggle").checked == true) {
        var A = new Audio("aaaa.mp3");
        A.play();
    };
}

function soundPlayGuhHuh(){
    if (document.getElementById("soundToggle").checked == true) {
        var guh_huh = new Audio("Cranberry Animated - Sprite Cranberry TV Commercial, Featuring Lebron James.mp3");
        guh_huh.play();
    };
}
function soundPlayB(){
    if (muteToggle == false){
        bbbbb.play();
    }
}
function soundPlayC(){
    if (muteToggle == false){
        ccccc.play();
    }
}
function soundPlayD(){
    if (muteToggle == false){
        ddddd.play();
    }
}
function soundPlayE(){
    if (muteToggle == false){
        eeeee.play();
    }
}
function soundPlayF(){
    if (muteToggle == false){
        fffff.play();
    }
}
function soundPlayG(){
    if (muteToggle == false){
        ggggg.play();
    }
}