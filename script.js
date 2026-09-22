message = "your digital sticker journal...brainstorming....creating....having fun....★ ";
function step() {
message = message.substr(1) + message.substr(0,1);
document.title = message.substr(0,15);
}