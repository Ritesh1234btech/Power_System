const assert = require('assert');
const { buildAllocationTableRows, buildAllocationChartData } = require('../allocation_rendering');

const generators = [{ pmin: 10, pmax: 100 }, { pmin: 20, pmax: 200 }];
const metaResults = {
  GA: { bestPower: [40, 80] },
  PSO: { bestPower: [35, 90] }
};

const table = buildAllocationTableRows({ metaResults, generators });
assert.deepStrictEqual(table.headers, ['Algorithm', 'G1', 'G2', 'Total (MW)', 'Loss (MW)']);
assert.strictEqual(table.rows[0].name, 'GA');
assert.deepStrictEqual(table.rows[0].cells, ['40.00', '80.00']);
assert.strictEqual(table.rows[0].total, '120.00');
assert.strictEqual(table.rows[0].loss, '0.00');

const chart = buildAllocationChartData({ generators, metaResults, lambdaPower: [38, 82] });
assert.deepStrictEqual(chart.labels, ['G1', 'G2']);
assert.deepStrictEqual(chart.series.map((s) => s.name), ['GA', 'PSO', 'Lambda-Iteration']);
assert.deepStrictEqual(chart.series[0].values, [40, 80]);
assert.deepStrictEqual(chart.series[2].values, [38, 82]);
console.log('allocation rendering helpers regression passed');
