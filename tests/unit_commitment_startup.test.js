const assert = require('assert');

function computeStartups(statusHistory, startupCosts) {
  let prevStatus = Array(startupCosts.length).fill(false);
  return statusHistory.map((hourStatus) => {
    let startup = 0;
    hourStatus.forEach((isOn, i) => {
      if (isOn && !prevStatus[i]) startup += startupCosts[i] || 0;
    });
    prevStatus = hourStatus.slice();
    return startup;
  });
}

const history = [
  [true, false, true],
  [true, false, true],
  [false, false, true],
  [true, false, true]
];
const costs = [2800, 1200, 2600];
const startups = computeStartups(history, costs);
assert.deepStrictEqual(startups, [5400, 0, 0, 2800]);
console.log('startup logic regression passed');
