/*This File creates the sound file players and their default properties
If you create a new player, be sure to import it at the top of index.js!
*/

//import * as Tone from "../lib/Tone.js";

class soundFile {
  constructor(file, deferPlay = false) {
    this.deferPlay = deferPlay;
    this.player = new Tone.Player({
      url: "./sounds/" + file,
      loop: false,
      autostart: false
    }).toDestination(); // Use `toDestination()` instead of `toMaster()`, as `toMaster()` is deprecated
  }
  
  // Play function also with pre-stop and deferred playing
  play() {
    // Defer playback if sound isn't finished loading
    if (this.player.loaded === true) {
      this.deferPlay = false;
      this.player.stop();
      this.player.start();
    } else {
      this.deferPlay = true;
    }
  }
  
  // Stop function that may have easier syntax
  stop() {
    this.player.stop();
  }
}

// Try to play sounds that had their playback deferred
export function playDeferredSounds() {
  for (let i = 0; i < soundArray.length; i++) {
    if (soundArray[i].deferPlay === true) {
      soundArray[i].play();
    }
  }
}

export var soundArray = []; // List of sounds loaded

// Here is where all the Sound File Players Start

export var wallSound = new soundFile("silence.mp3"); // Load sound
soundArray.push(wallSound); // Add sound to list of sounds

export var paddleSound = new soundFile("Paddle sound.mp3");
soundArray.push(paddleSound);

export var scoreSound = new soundFile("Score sound.mp3");
soundArray.push(scoreSound);

export var ambientSound = new soundFile("PONG Music Slow.mp3");
soundArray.push(ambientSound);
ambientSound.player.loop = true; // Turn on looping
ambientSound.player.volume.value = 0; // Reset volume to normal (0 dB)
ambientSound.player.playbackRate = 1; // Set playback rate to 1 (normal speed)

export var adventureMusic = new soundFile("silence.mp3");
soundArray.push(adventureMusic);
adventureMusic.player.loop = true;
adventureMusic.player.volume.value = 0; // Reset volume
adventureMusic.player.playbackRate = 1; // Set normal playback rate

export var villageMusic = new soundFile("silence.mp3");
soundArray.push(villageMusic);
villageMusic.player.loop = true;
villageMusic.player.volume.value = 0; // Reset volume
villageMusic.player.playbackRate = 1; // Set normal playback rate
