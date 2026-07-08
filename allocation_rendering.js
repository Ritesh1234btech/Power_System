(function (root) {
  const defaultColors = ['#0E8C82', '#C1652B', '#1E3A5F', '#8AA6C2', '#B08968', '#6FBF73'];

  function toFixed2(value) {
    return (Number(value) || 0).toFixed(2);
  }

  function buildAllocationTableRows({ metaResults, generators, lossFn }) {
    const headers = ['Algorithm', ...generators.map((_, index) => `G${index + 1}`), 'Total (MW)', 'Loss (MW)'];
    const rows = [];
    Object.entries(metaResults || {}).forEach(([name, result]) => {
      const power = Array.isArray(result?.bestPower) ? result.bestPower : [];
      const cells = power.map((value) => toFixed2(value));
      const total = power.reduce((sum, value) => sum + Number(value || 0), 0).toFixed(2);
      const loss = typeof lossFn === 'function' ? lossFn(power).toFixed(2) : '0.00';
      rows.push({ name, cells, total, loss });
    });
    return { headers, rows };
  }

  function buildAllocationChartData({ metaResults, generators, lambdaPower, colors = defaultColors }) {
    const labels = generators.map((_, index) => `G${index + 1}`);
    const series = [];
    Object.entries(metaResults || {}).forEach(([name, result], index) => {
      const values = Array.isArray(result?.bestPower) ? result.bestPower.map((value) => Number(value || 0)) : [];
      series.push({
        name,
        x: labels,
        y: values,
        values,
        type: 'bar',
        marker: { color: colors[index % colors.length] }
      });
    });
    if (Array.isArray(lambdaPower) && lambdaPower.length) {
      series.push({
        name: 'Lambda-Iteration',
        x: labels,
        y: lambdaPower.map((value) => Number(value || 0)),
        values: lambdaPower.map((value) => Number(value || 0)),
        type: 'bar',
        marker: { color: colors[series.length % colors.length] }
      });
    }
    return { labels, series };
  }

  function renderAllocationTable({ tableId, metaResults, generators, lossFn }) {
    if (!tableId) return;
    const table = document.getElementById(tableId);
    if (!table) return;
    const { headers, rows } = buildAllocationTableRows({ metaResults, generators, lossFn });
    let html = '<thead><tr><th>Algorithm</th>';
    headers.slice(1, headers.length - 2).forEach((header) => {
      html += `<th>${header}</th>`;
    });
    html += `<th>${headers[headers.length - 2]}</th><th>${headers[headers.length - 1]}</th></tr></thead><tbody>`;
    rows.forEach((row) => {
      html += `<tr><td class="gen-tag">${row.name}</td>${row.cells.map((cell) => `<td>${cell}</td>`).join('')}<td>${row.total}</td><td>${row.loss}</td></tr>`;
    });
    table.innerHTML = html + '</tbody>';
  }

  function renderAllocationChart({ plotId, metaResults, generators, lambdaPower, colors = defaultColors, baseLayout }) {
    if (!plotId) return;
    const plot = document.getElementById(plotId);
    if (!plot) return;
    const { series } = buildAllocationChartData({ metaResults, generators, lambdaPower, colors });
    if (series.length === 0) return;
    Plotly.newPlot(plotId, series, {
      ...baseLayout('Generator', 'Power (MW)'),
      barmode: 'group',
      legend: { orientation: 'h', x: 0.5, xanchor: 'center', y: -0.2, font: { size: 9 } }
    }, { displayModeBar: false, responsive: true });
  }

  root.buildAllocationTableRows = buildAllocationTableRows;
  root.buildAllocationChartData = buildAllocationChartData;
  root.renderAllocationTable = renderAllocationTable;
  root.renderAllocationChart = renderAllocationChart;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      buildAllocationTableRows,
      buildAllocationChartData,
      renderAllocationTable,
      renderAllocationChart
    };
  }
})(typeof window !== 'undefined' ? window : globalThis);
