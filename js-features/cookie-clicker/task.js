let clickerCounter = document.getElementById("clicker__counter");
let image = document.getElementById("cookie");

image.onclick = function(){
  if (image.width == 200){ 
    image.width = 220;
  } else {
    image.width = 200;
  }
  clickerCounter.textContent++; 
}

