"use stict";

//div.style.height= i+"$";
//div.style.width= i+"$";
//for(let counter ... ){
//div.style.transform = translate(${counter-50}px) rotate(${counter*4});
//document.querySelector("#artworkX").append(div);}

window.addEventListener("DOMContentLoaded", start);
//let div = document.querySelector(".box");

function start() {
  console.log("Loop");
  generateArt();
}

function generateArt() {
  for (let counter = 100; counter <= 300; counter += 20) {
    const div = document.createElement("div");
    div.classList.add("box");
    div.style.width = counter + "px";
    div.style.height = counter + "px";
    document.querySelector("#artwork1").append(div);
  }

  for (let counter = 0; counter <= 90; counter += 10) {
    const div = document.createElement("div");
    div.classList.add("box");
    div.style.width = "90px";
    div.style.height = "90px";
    div.style.transform = "rotate(" + counter + "deg)";
    document.querySelector("#artwork2").append(div);
  }

  //try to write less
  //innerHTML?
  //name = "<script>alert('I am John in an annoying alert!')</script>"; el.innerHTML = name;
  // script to div
  //translate(${counter-50}px) rotate(${counter*4})
  //+= adds a value to a variable

  for (let counter = 0; counter <= 200; counter += 10) {
    artwork3.innerHTML += `<div class="circle" style="width: ${counter}px; height: ${counter}px;"></div>`;
  }
  for (let counter = -90; counter <= 90; counter += 20) {
    artwork4.innerHTML += `<div class="box" style="transform: translate(${counter}px , ${counter}px)"></div>`;
  }
  for (let counter = 1; counter < 512; counter += counter) {
    artwork5.innerHTML += `<div class="circle" style="width: ${counter}px; height: ${counter}px;"></div>`;
  }

  for (let counter = -20; counter <= 45; counter += 5) {
    artwork6.innerHTML += `<div class="circle" style="transform: translateX(${counter -
      50}px) rotate(${counter * 4}deg);"></div>`;
  }

  for (let counter = 0; counter <= 200; counter += 10) {
    artwork7.innerHTML += `<div class="circle" style="width: ${counter}px; height: ${counter}px; transform: translate(${counter}px, ${-counter /
      2}px);"></div>`;
  }

  for (let counter = 50; counter <= 200; counter += 10) {
    artwork8.innerHTML += `<div class="box" style="width: ${counter}px; height: ${counter}px; transform: translate(${counter /
      2}px) rotate(${counter}deg);"></div>`;
  }

  for (let counter = 50; counter <= 200; counter += 30) {
    // square
    artwork9.innerHTML += `<div class="box" style="width: ${counter}px; height: ${counter}px;"></div>`;
    //circle
    artwork9.innerHTML += `<div class="circle" style="width: ${counter}px; height: ${counter}px;"></div>`;
  }
}
