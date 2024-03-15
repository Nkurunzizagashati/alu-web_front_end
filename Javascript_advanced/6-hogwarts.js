function studentHogwarts() {
  let privateScore = 0;
  let name = null;
  function changeScoreBy(points) {
    privateScore += points;
  }

  function setName(newName) {
    name = newName;
  }

  function rewardStudent() {
    changeScoreBy(1);
  }

  function penelizeStudent() {
    changeScoreBy(-1);
  }

  function getScore() {
    return `${name}: ${privateScore}`;
  }

  return { setName, rewardStudent, penelizeStudent, getScore };
}

const harry = studentHogwarts();
harry.setName("Harry");

for (let i = 0; i < 4; i++) {
  harry.rewardStudent();
}

console.log(harry.getScore());

const draco = studentHogwarts();
draco.setName("Draco");

draco.rewardStudent();

for (let i = 0; i < 3; i++) {
  draco.penelizeStudent();
}

console.log(draco.getScore());
