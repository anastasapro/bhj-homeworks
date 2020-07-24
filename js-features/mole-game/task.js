const luckCount = document.getElementById("dead");
const unluckCount = document.getElementById("lost");

const getHole = i => document.getElementById(`hole${i}`);
for (let i = 1; i <= 9; i++) {
  getHole(i).onclick = function() {
  if (getHole(i).className.includes("hole_has-mole")) {
    luckCount.textContent++;
    } else {
    unluckCount.textContent++;
    }
  if (luckCount.textContent == 10) {
	alert("Не жаль кротиков?");
    luckCount.textContent = 0;
    } else if (unluckCount.textContent == 5) {
	alert("Молодец, лучше вообще их не убивать");
    unluckCount.textContent = 0;	
    }
  }
}

