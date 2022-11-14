function calculate() {
  let worker = new Worker("worker.js");
  const integer = +document.getElementById("inputNumber").value;
  const result = document.getElementById("result");
  worker.onmessage = (message) => {
    console.log("value from worker" + message.data);
    result.innerText = `Result:${message.data}`;
  };
  if (result.innerText === "Calculating...") {
    worker.terminate();
    worker = new Worker("worker.js");
    worker.postMessage({ data: integer });
  } else if (integer) {
    worker.postMessage({ data: integer });
    result.innerText = "Calculating...";
  }
  worker.onmessage = (message) => {
    console.log("value from worker" + message.data);
    result.innerText = `Result:${message.data}`;
  };
}
