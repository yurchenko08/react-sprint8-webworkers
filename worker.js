function fibonaci(n) {
  if (n < 2) return n;
  return fibonaci(n - 1) + fibonaci(n - 2);
}
onmessage = ({ data }) => {
  let num = data.data;
  postMessage(fibonaci(num));
};
