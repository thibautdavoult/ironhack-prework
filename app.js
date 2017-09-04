// Rover Object Goes Here
// ======================

var rover = {
  direction: "N",
  travelLog: [0, 0],
};

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  var rotateLeft = rover.direction;
  switch(rotateLeft) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
  return rover.direction;
}

function turnRight(rover){
  console.log("turnRight was called!");
  var rotateRight = rover.direction;
  switch(rotateRight) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  return rover.direction;
}

function boundariesCheck(rover) {
if ( rover.direction === "N" && rover.travelLog[1] < 9 ) {
      return true;
} else if ( rover.direction === "S" && rover.travelLog[1] > 0 ) {
    return true;
} else if ( rover.direction === "E" && rover.travelLog[0] < 9 ) {
        return true;
} else if ( rover.direction === "W" && rover.travelLog[0] > 0 ) {
        return true;
} else
        return false;
}

function moveForward(rover){
  console.log("moveForward was called");
  var moving = rover.direction;
  if (boundariesCheck(rover)) {
    switch (moving) {
      case "N":
      rover.travelLog[1] += 1;
        break;
      case "S":
        rover.travelLog[1] -= 1;
        break;
      case "E":
        rover.travelLog[0] += 1;
        break;
      case "W":
        rover.travelLog[0] -= 1;
        break;
    }
  return [rover.travelLog[0], rover.travelLog[1]];
  } else {
  console.log("the rover is out of boundaries!!");
  }
}

function keyShortcuts() {
  console.log("keyShortcuts was used");
  var str = prompt("Direct with (f)orward, (l)eft and (r)ight");
  for (var i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "f":
        moveForward(rover);
        break;
    }
    console.log(rover.direction, rover.travelLog[0], rover.travelLog[1]);
  }
  return [rover.direction, rover.travelLog[0], rover.travelLog[1]];
}
