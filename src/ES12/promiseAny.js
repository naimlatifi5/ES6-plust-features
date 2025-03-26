export const promiseAny = () => {
  console.log('========== Promise Any  ============');
  // Promise.any() - returns the first promise that resolves
  const A = new Promise((resolve, reject) => {
    setTimeout(() => resolve('A resolved'), 500);
  });

  const B = new Promise((resolve, reject) => {
    setTimeout(() => resolve('D resolved'), 1000);
  });

  const C = new Promise((reject) => {
    setTimeout(() => reject('C rejected'), 2000);
  });

  const D = new Promise((resolve, reject) => {
    setTimeout(() => reject('C rejected'), 2500);
  });
  const E = new Promise((resolve, reject) => {
    setTimeout(() => reject('E rejected'), 3500);
  });

  const resolvedPromises = async () => {
    const resolved = await Promise.any([A, B, C]);
    console.log('One of promise resolved faster return :', resolved);
  };
  const rejectedPromises = async () => {
    const rejected = await Promise.any([D, E]);
    console.dir('All promise rejected:', rejected); //AggregateError: All promises were rejected
  };

  resolvedPromises();
  rejectedPromises();
};
