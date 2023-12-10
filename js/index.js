const numbers = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

document.getElementById("arr").innerHTML = "[ " + numbers.join(", ") + " ]";

function runCalculation() {
  let positiveSum = 0;
  let positiveMul = 1;
  let positiveCounter = 0;

  let oddPositiveCounter = 0;
  let oddPositiveSum = 0;

  let evenPositiveCounter = 0;
  let evenPositiveSum = 0;

  let maxEl = numbers[0];
  let indeMaxEl = 0;

  let negativeCounter = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positiveSum += numbers[i];
      positiveMul *= numbers[i];
      positiveCounter++;

      if (numbers[i] % 2 === 0) {
        evenPositiveCounter++;
        evenPositiveSum += numbers[i];
      } else {
        oddPositiveCounter++;
        oddPositiveSum += numbers[i];
      }
    }

    if (maxEl < numbers[i]) {
      maxEl = numbers[i];
      indeMaxEl = i;
    }
    if (numbers[i] < 0) {
      negativeCounter++;
    }
  }

  document.getElementById("positiveSum").innerHTML = positiveSum;
  document.getElementById("positiveMul").innerHTML = positiveMul;
  document.getElementById("positiveCounter").innerHTML = positiveCounter;
  document.getElementById("oddPositiveCounter").innerHTML = oddPositiveCounter;
  document.getElementById("oddPositiveSum").innerHTML = oddPositiveSum;
  document.getElementById("evenPositiveCounter").innerHTML =
    evenPositiveCounter;
  document.getElementById("evenPositiveSum").innerHTML = evenPositiveSum;
  document.getElementById("maxEl").innerHTML = maxEl;
  document.getElementById("indexMxEl").innerHTML = indeMaxEl;
  document.getElementById("negativeCounter").innerHTML = negativeCounter;
}
