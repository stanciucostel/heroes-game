var aud = document.getElementById("dragonAudio");

function play() {
  aud.play();
}

function pause() {
  aud.pause();
}

document.querySelector(".center").addEventListener("click", function () {
  [].forEach.call(document.querySelectorAll(".btn-hidden"), function (el) {
    if (el.style.display == "none") el.style.display = "block";
    else el.style.display = "none";
  });
});

document.querySelector(".play-go").addEventListener("click", function () {
  [].forEach.call(document.querySelectorAll(".findwinner"), function (el) {
    if (el.style.display == "none") el.style.display = "block";
    else el.style.display = "none";
  });
});

function showhide() {
  var div = document.getElementById("newpost");
  div.classList.toggle("hidden");
}
