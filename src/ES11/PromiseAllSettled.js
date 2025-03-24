export const promiseAllSettled = () => {
  const A = new Promise((resolve, reject) => {
    setTimeout(() => resolve('A resolved'), 500);
  });
  const B = new Promise((resolve, reject) => {
    setTimeout(() => resolve('B resolve'), 1000);
  });
  const C = new Promise((resolve, reject) => {
    setTimeout(() => reject('C rejected'), 2000);
  });
  const D = new Promise((resolve, reject) => {
    setTimeout(() => resolve('D resolved'), 900);
  });
  // with promise all if C is rejected D is not executed
  Promise.all([A, B, C, D])
    .then(([A, B, C]) => {
      console.log(A);
      console.log(B);
      console.log(C);
      console.log(D);
    })
    .catch((error) => {
      console.log('error', error); // C rejected
    });

  // Promise allSettled with resolve/reject
  Promise.allSettled([A, B, C, D])
    .then(([A, B, C, D]) => {
      console.log(A); // output: {status: "fulfilled", value: "A resolved"}
      console.log(B); // output: {status: "fulfilled", value: "B resolve"}
      console.log(C); // output: {status: "rejected", reason: "C rejected"}
      console.log(D); // output: {status: "fulfilled", value: "D resolved"}
    })
    .catch((error) => {
      console.log('error', error);
    });
};
