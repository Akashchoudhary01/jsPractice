const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const Weight = parseInt(document.querySelector("#Weight").value);
  const result = document.querySelector("#result");

  if (isNaN(height) || height <= 0) {
    result.innerHTML = `Please provide a valid height.`;
  } else if (isNaN(Weight) || Weight <= 0) {
    result.innerHTML = `Please provide a valid weight.`;
  } else {
    const bmi = ((Weight / (height * height)) * 10000).toFixed(2);
    result.innerHTML = `<span>Your BMI is: <strong>${bmi}</strong></span>`;
  }
});
