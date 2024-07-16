let numRotations = 5; // Number of rotations

function rotateStringRight(str) {
  let rotatedStr = str;
  const intervalId = setInterval(() => {
    rotatedStr = rotatedStr.slice(-1) + rotatedStr.slice(0, -1);
    console.log(rotatedStr);
    numRotations--;

    if (numRotations === 0) {
      clearInterval(intervalId); // Clear the interval after 5 rotations
    }
  }, 1000);
}

rotateStringRight('w3resource');