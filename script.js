let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');

let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

const isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
} 

const playDoor = ('win') => {
  numClosedDoors--;
  if (numClossedDoors === 0) {
    gameOver();
  } else {
    
  }
}

doorImage1.onclick = () => {
  doorImage1.src = openDoor1;
  playDoor();
  if (!isClicked(doorImage1)) {
    return false;
  } else {
    return true;
  }
}

doorImage2.onclick = () => {
  doorImage2.src = openDoor2;
  playDoor();
    if (!isClicked(doorImage2)) {
    return false;
  } else {
    return true;
  }
}

doorImage3.onclick = () => {
  doorImage3.src = openDoor3;
  playDoor();
    if (!isClicked(doorImage3)) {
    return false;
  } else {
    return true;
  }
}

const gameOver = (status) => {
  if (status === 'win') {
    startbutton.innerHTML = 'You win! Play again?';
  } else {
    
  }
}

const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceBeachPath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  } else (choreDoor === 2) {
    openDoor3 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor1 = beachDoorPath;
  }
}

randomChoreDoorGenerator()
startRound()
