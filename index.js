function sort(entrada) {
  let array = [];

  let values = [];

  for (let i = 0; i < entrada.length; i++) {
    values.push([entrada[i], 0]);
  }

  console.log(values);

  for (let i = 0; i < entrada.length; i++) {
    for (let j = 0; j < entrada.length; j++) {
      if (entrada[i] > entrada[j]) {
        values[i][1]++;
      }
    }

    if (array[values[i][1]] === undefined) {
      array[values[i][1]] = entrada[i];
    } else {
      array[values[i][1] + 1] = entrada[i];
    }
  }

  return array;
}

module.exports = sort;
