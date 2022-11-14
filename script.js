function calculate() {
  let worker = new Worker("worker.js");
  const integer = +document.getElementById("inputNumber").value;
  const result = document.getElementById("result");
  result.innerText = "Calculating...";
  if (result.innerText === "Calculating...") {
    worker.terminate();
    worker = new Worker("worker.js");
    worker.postMessage({ data: integer });
  } else if (integer) {
    worker.postMessage({ data: integer });
  }
  worker.onmessage = (message) => {
    result.innerText = `Result:${message.data}`;
  };
}
