export function generatePieChartData(arr) {
  let total = 0;

  arr.forEach((obj) => {
    const maxValue = Math.min(100000 - total, 100000); // Calculate the maximum value to prevent exceeding the limit
    const randomValue = Math.floor(Math.random() * maxValue);
    obj.value = randomValue;
    total += randomValue;
  });
  return arr;
}
