function* fibonacci() {
  let [prev, curr] = [0, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

let sequence = fibonacci();
for (let i = 0; i < 100; i++) {
  console.log(sequence.next().value);
}
