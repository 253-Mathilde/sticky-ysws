message = "your digital sticker journal...brainstorming....creating....having fun....★ ";
function step() {
message = message.substr(1) + message.substr(0,1);
document.title = message.substr(0,15);
}


function dragstartHandler(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function dragoverHandler(ev) {
  ev.preventDefault();
}

function dropHandler(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}