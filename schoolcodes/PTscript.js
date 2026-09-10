function outer() {
  const name = "outer";
  const message = inner();

  return message;
}

function inner() {
  const name = "inner";

  return "Hello Mae!";
}

console.log("before outer() call");
console.log(outer());
console.log("after outer() call");
