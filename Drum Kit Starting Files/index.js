document.querySelector("button.w").addEventListener("click", function () {
  var audio = new Audio("sounds/tom-1.mp3");
  audio.play();
});
document.querySelector("button.a").addEventListener("click", function () {
  audio = new Audio("sounds/tom-2.mp3");
  audio.play();
});
document.querySelector("button.s").addEventListener("click", function () {
  audio = new Audio("sounds/tom-3.mp3");
  audio.play();
});
document.querySelector("button.d").addEventListener("click", function () {
  audio = new Audio("sounds/tom-4.mp3");
  audio.play();
});
document.querySelector("button.j").addEventListener("click", function () {
  audio = new Audio("sounds/snare.mp3");
  audio.play();
});
document.querySelector("button.k").addEventListener("click", function () {
  audio = new Audio("sounds/crash.mp3");
  audio.play();
});
document.querySelector("button.l").addEventListener("click", function () {
  audio = new Audio("sounds/kick-bass.mp3");
  audio.play();
});

// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document
//     .querySelectorAll("button.drum")
//     [i].addEventListener("click", function () {
//       console.log((this.style.color = "white"));
//     });
// }
function keypress() {
  document.addEventListener("keypress", function (event) {
    //console.log(event);
    if (event.key === "w") {
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
    }
    if (event.key === "a") {
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
    }
    if (event.key === "s") {
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
    }
    if (event.key === "d") {
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
    }
    if (event.key === "j") {
      audio = new Audio("sounds/snare.mp3");
      audio.play();
    }
    if (event.key === "k") {
      audio = new Audio("sounds/crash.mp3");
      audio.play();
    }
    if (event.key === "l") {
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
    } else {
      console.log("please enter valid key");
    }
  });
}
keypress();
