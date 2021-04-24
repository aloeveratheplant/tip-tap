var aaaaa = new Audio();
aaaaa.src = "aaaa.mp3";
var guh_huh = new Audio();
guh_huh.src = "Cranberry Animated - Sprite Cranberry TV Commercial, Featuring LeBron James.mp3"


var muteToggle = document.getElementById("soundToggle").checked;

function soundPlay(){
    if (muteToggle == false){
        aaaaa.play();
    }
}