//suma
function sumaPromisa(op1, op2) {
  if (typeof op1 !== "number")
    return Promise.reject(`El valor "${op1}" no es un numero`);
  if (typeof op2 !== "number")
    return Promise.reject(`El valor "${op2}" no es un numero`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        op1,
        op2,
        result: op1 + op2,
      });
    }, 0 | (Math.random() * 1000));
  });
}

sumaPromisa(2, 4)
  .then((obj) => {
    console.log(
      `Promise suma: Valor 1: ${obj.op1} , valor 2:  ${obj.op2}, Suma: ${obj.result}`
    );
    return sumaPromisa(3, 4);
  })
  .then((obj) => {
    console.log(
      `Promise suma: Valor 1: ${obj.op1} , valor 2:  ${obj.op2}, Suma: ${obj.result}`
    );
    return sumaPromisa(5, 4);
  })
  .then((obj) => {
    console.log(
      `Promise suma: Valor 1: ${obj.op1} , valor 2:  ${obj.op2}, Suma: ${obj.result}`
    );
    return sumaPromisa(6, 4);
  })
  .then((obj) => {
    console.log(
      `Promise suma: Valor 1: ${obj.op1} , valor 2:  ${obj.op2}, Suma: ${obj.result}`
    );
    console.log(`Fin`);
  })
  .catch((err) => console.error(err));
//Resta
function resta(num1, num2) {
  if (typeof num1 !== "number")
    return Promise.reject(`EL dato "${num1}" no es valido`);
  if (typeof num2 !== "number")
    return Promise.reject(`EL dato "${num2}" no es valido`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        num1,
        num2,
        result: num1 - num2,
      });
    }, 0);
  });
}

resta(2, 4)
  .then((obj) => {
    console.log(
      `Numero 1: ${obj.num1}, Numero 2: ${obj.num2} Resultado: ${obj.result} `
    );
    return resta(3, 4);
  })
  .then((obj) => {
    console.log(
      `Numero 1: ${obj.num1}, Numero 2: ${obj.num2} Resultado: ${obj.result} `
    );
  })
  .then((obj) => {
    console.log(`Fin`);
  })
  .catch((err) => console.error(err));

//multiplicación
function multiplicacion(num1, num2) {
  if (typeof num1 !== "number")
    return Promise.reject(`EL dato "${num1}" no es valido`);
  if (typeof num2 !== "number")
    return Promise.reject(`EL dato "${num2}" no es valido`);
  return new Promise((resolve, rejact) => {
    resolve({
      num1,
      num2,
      result: num1 * num2,
    });
  });
}

multiplicacion(10, 3)
  .then((obj) => {
    console.log(`num1 : ${obj.num1}, num2: ${obj.num2}; result: ${obj.result}`);
    return multiplicacion(2, 4);
  })
  .then((obj) => {
    console.log(`num1 : ${obj.num1}, num2: ${obj.num2}; result: ${obj.result}`);
    return multiplicacion(3, 5);
  })
  .then((obj) => {
    console.log(`num1 : ${obj.num1}, num2: ${obj.num2}; result: ${obj.result}`);
  })
  .catch((err) => console.error(err));

//división
function division(num1, num2) {
  if (typeof num1 !== "number")
    return Promise.reject(`EL dato "${num1}" no es valido`);
  if (typeof num2 !== "number")
    return Promise.reject(`EL dato "${num2}" no es valido`);
  if (num2 === 0) return Promise.reject("no se puede dividir por cero");
  return new Promise((resolve, releject) => {
    resolve({
      num1,
      num2,
      result: (num1 / num2).toFixed(1),
    });
  });
}

division(4, 4)
  .then((obj) => {
    console.log(
      `num1 : ${obj.num1}, num2: ${obj.num2}; result: ${obj.result} `
    );
    return division(6, 4);
  })
  .then((obj) => {
    console.log(
      `num1 : ${obj.num1}, num2: ${obj.num2}; result: ${obj.result} `
    );
    console.log("Fin");
  })
  .catch((err) => console.error(err));

//AL cuadrado
function cuadradoPromise(value) {
  if (typeof value !== "number")
    return Promise.reject(`El valor "${value}" no es un numero`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}
cuadradoPromise(1)
  .then((obj) => {
    console.log("Inica Promise");
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(3);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(2);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(3);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    console.log("Fin de la promesa");
  })
  .catch((err) => console.error(err));
