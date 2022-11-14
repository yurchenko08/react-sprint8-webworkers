function calculate() {
  let worker = new Worker("worker.js");
  const integer = +document.getElementById("inputNumber").value;
  const result = document.getElementById("result");
  worker.onmessage = (message) => {
    result.innerText = `Result: ${message.data}`;
  };

  if (result.innerText === "Calculating...") {
    worker.terminate();
    worker = new Worker("worker.js");
    worker.onmessage = (message) => {
      result.innerText = `Result: ${message.data}`;
    };
    worker.postMessage({ data: integer });
  } else if (integer) {
    result.innerText = "Calculating...";
    worker.postMessage({ data: integer });
  }
}
