document.querySelector("button.w").addEventListener("click", function () {
  var audio = new Audio("sounds/tom-1.mp3");
  audio.play();
  activeBtn();
});
document.querySelector("button.a").addEventListener("click", function () {
  audio = new Audio("sounds/tom-2.mp3");
  audio.play();
  activeBtn();
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
      // activeBtn();
    }
    if (event.key === "a") {
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      //activeBtn();
    }
    if (event.key === "s") {
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      //activeBtn();
    }
    if (event.key === "d") {
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      //activeBtn();
    }
    if (event.key === "j") {
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      //activeBtn();
    }
    if (event.key === "k") {
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      //activeBtn();
    }
    if (event.key === "l") {
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      //activeBtn();
    } else {
      console.log("please enter valid key");
    }
  });
}
function activeBtn() {
  document.querySelector(".drum").classList.add("pressed");
  setTimeout(function () {
    document.querySelector(".drum").classList.remove("pressed");
  }, 100);
}

keypress();

//activeBtn();
