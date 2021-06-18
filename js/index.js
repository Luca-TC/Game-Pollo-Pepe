window.onload = () => Game.init()
let sound = document.createElement('audio')
sound.id = 'audio'
sound.controls = 'controls'
sound.src = './sound/sound.mp3'
sound.type = 'audio/mp3'
sound.display = 'none'
document.body.appendChild(sound)

function playAudio() {
  document.getElementById('audio').play();
}

setTimeout("playAudio()", 3000); 