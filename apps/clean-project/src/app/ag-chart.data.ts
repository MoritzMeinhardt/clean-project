export function getData(start: number, end: number) {
  const points: { x: number, y: number, xConstant: number }[] = [];
  for (let x = start; x <= end; x++) {
    points.push({ x, y: getYforNormalverteilung(x), xConstant: 4 }); // Normalverteilung y = ax²+bx+c
  }
  return points;
}

function getYforNormalverteilung(x: number): number {
  const mean = 0; // Assuming mean (μ) is 0
  const stdDev = 3; // Assuming standard deviation (σ) is 1

  const exponent = -((x - mean) ** 2) / (2 * stdDev ** 2);
  const coefficient = 1 / (stdDev * Math.sqrt(2 * Math.PI));

  return coefficient * Math.exp(exponent);
}
