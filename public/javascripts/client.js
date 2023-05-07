const submitButton = document.getElementById("submitButton");
const inputData = document.getElementById("inputData");
const outputData = document.getElementById("outputData");

submitButton.addEventListener("click", () => {
  const data = { data: inputData.value };
  fetch("/getData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      outputData.textContent = result.data;
    })
    .catch((error) => {
      console.error(error);
    });
});
