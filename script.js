function actie(){
    document.getElementById("para").innerHTML="Clicked";
    }

function mousover(){
    document.getElementById("mover").innerHTML="Clicked";
}

function mouseout(){
    document.getElementById("mover").innerHTML="Click";

}

function keyd(){
    document.getElementById("kdown").innerHTML="keydown"
}

function keyu(){
    document.getElementById("kup").innerHTML="keyup"
}

function onl(){
    alert("Page is loading using 'onload' event")
    document.getElementById("oload").innerHTML="Page is loaded"
}

function ons(){
    alert("submitted uning 'onsubmit even'")
    document.getElementById("osubmit").innerHTML="submitted"
}

function onc(){
    document.getElementById("mySelect").value;

    document.getElementById("ochange").innerHTML = document.getElementById("mySelect").value;;
}

function onf(x){
    x.style.color = "red"; 
}

function onb(x){
    x.style.color="blue"
}

function res(){
    var w = window.outerWidth;
    var h = window.outerHeight;
    var txt = "width=" + w + ", height=" + h;
    document.getElementById("rsize").innerHTML = txt;
}
let x = 0
function onsc(){
    document.getElementById("oscroll").innerHTML = x+=1;
}

function onatp(){
    alert("This document is now being printed by 'onafterpoint' event");
    document.getElementById("oafterp").innerHTML="used";
}

function onbp(){
    alert("You are about to print this document! by usinf 'onbeforeprint'.");
    document.getElementById("obeforep").innerHTML="used";
}

const div = document.getElementById("myDiv");
div.addEventListener("contextmenu", (e) => {e.preventDefault()});

function onco(){
    document.getElementById("ocopy").innerHTML = "You copied text!"
}

function onco(){
    document.getElementById("ocopy").innerHTML = "You copied text!"
}
function oncu(){
    document.getElementById("ocopy").innerHTML = "You cutted text!"
}

function ondbc(){
    document.getElementById("ondbc").innerHTML="dubble clicked"
}

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
  }
  
  function dragging(event) {
    document.getElementById("demo").innerHTML = "The p element is being dragged";
  }
  
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("dadr").innerHTML = "draged & dropped";
  }



  function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
    document.getElementById("dreage").innerHTML = "Dragging started";
  }
  
  function dragEnd(event) {
    document.getElementById("dreage").innerHTML = "Dragging ended.";
  }
  
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
  }

  function oend(){
    document.getElementById("onen").innerHTML = "The audio has ended";
}

var elem = document.documentElement;

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem = window.top.document.body; //To break out of frame in IE
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    window.top.document.msExitFullscreen();
  }
}

var output = document.getElementById("myP");
document.addEventListener("fullscreenchange", function() {
  output.innerHTML = "fullscreenchange event fired!";
});
document.addEventListener("mozfullscreenchange", function() {
  output.innerHTML = "mozfullscreenchange event fired!";
});
document.addEventListener("webkitfullscreenchange", function() {
  output.innerHTML = "webkitfullscreenchange event fired!";
});
document.addEventListener("msfullscreenchange", function() {
  output.innerHTML = "msfullscreenchange event fired!";
});

function inp() {
    let text = document.getElementById("myInput").value;
    document.getElementById("inpo").innerHTML = "You wrote: " + text;
  }

  function onpages() {
    alert("Welcome! by using 'onpageshow' event.");
  }

  function onpes() {
    document.getElementById("opest").innerHTML = "You pasted text!";
  }