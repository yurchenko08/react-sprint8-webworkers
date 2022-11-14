let worker = new Worker("worker.js");
worker.onmessage = (message) => {
  console.log("value from worker" + message.data);
  result.innerText = `Result:${message.data}`;
};
function calculate() {
  const integer = +document.getElementById("inputNumber").value;
  const result = document.getElementById("result");

  if (result.innerText === "Calculating...") {
    worker.terminate();
    worker = new Worker("worker.js");
    worker.postMessage({ data: integer });
  } else if (integer) {
    worker.postMessage({ data: integer });
    result.innerText = "Calculating...";
  }
  worker.onmessage = (message) => {
    result.innerText = `Result:${message.data}`;
  };
}
