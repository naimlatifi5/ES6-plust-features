// ES16 Global Iterator Examples
// Global iterators provide a standardized way to iterate over global collections

export const globalIterator = () => {
  console.log('=== ES16 Global Iterator Examples ===\n');
  // 1. Iterator.range() - NEW in ES16
  // Creates an iterator that yields numbers in a range
  console.log('1. Iterator.range() - ES16 Feature:');

  // Basic range
  if (typeof Iterator !== 'undefined' && Iterator.range) {
    const range1to5 = Iterator.range(1, 6);
    console.log('Range 1 to 5:', [...range1to5]); // [1, 2, 3, 4, 5]

    // Range with step
    const evenNumbers = Iterator.range(0, 11, 2);
    console.log('Even numbers 0-10:', [...evenNumbers]); // [0, 2, 4, 6, 8, 10]
  } else {
    console.log('Iterator.range not available in this environment');
  }

  // 2. How we did ranges BEFORE ES16
  console.log('\n2. How we created ranges BEFORE ES16:');

  // Array-based approach
  const arrayRange = (start, end, step = 1) =>
    Array.from({ length: Math.ceil((end - start) / step) }, (_, i) => start + i * step);

  console.log('Array range 1-5:', arrayRange(1, 6));

  // 3. Iterator.from() - NEW in ES16
  console.log('\n3. Iterator.from() - ES16 Feature:');

  if (typeof Iterator !== 'undefined' && Iterator.from) {
    // Convert any iterable to an Iterator
    const arrayIterator = Iterator.from([1, 2, 3, 4, 5]);
    console.log('Iterator from array:', [...arrayIterator]);

    const stringIterator = Iterator.from('hello');
    console.log('Iterator from string:', [...stringIterator]);
  } else {
    console.log('Iterator.from not available in this environment');
  }


  const scores = [100, 85, 90, 95, 70];
const topScores = scores
  .filter(score => score > 80)
  .map(score => `Score: ${score}%`);
  console.log(topScores);


// The Iterator approach is lazy, processing elements one at a time without creating temporary arrays,
// which is a lifesaver for large datasets.
const scores1 = [100, 85, 90, 95, 70];
const topScores1 = Iterator.from(scores1)
  .filter(score => score > 80)
  .map(score => `Score: ${score}%`)
  .toArray();
console.log(topScores1);



  // 5. Iterator.zip() - NEW in ES16
  console.log('\n5. Iterator.zip() - ES16 Feature:');

  if (typeof Iterator !== 'undefined' && Iterator.zip) {
    const names = ['Alice', 'Bob', 'Charlie'];
    const ages = [25, 30, 35];
    const zipped = Iterator.zip(names, ages);
    console.log('Zipped arrays:', [...zipped]); // [['Alice', 25], ['Bob', 30], ['Charlie', 35]]
  } else {
    console.log('Iterator.zip not available - using manual implementation:');

    // Manual zip implementation
    function* zip(...iterables) {
      const iterators = iterables.map((it) => it[Symbol.iterator]());
      while (true) {
        const results = iterators.map((iter) => iter.next());
        if (results.some((result) => result.done)) break;
        yield results.map((result) => result.value);
      }
    }

    const names = ['Alice', 'Bob', 'Charlie'];
    const ages = [25, 30, 35];
    console.log('Manual zip:', [...zip(names, ages)]);
  }
};
