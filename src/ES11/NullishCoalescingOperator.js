export const nullishCoalescingOperator = () => {
  // previusly with default values
  console.log(null || 'default'); // default
  console.log(undefined || 'default'); // default
  console.log(false || 'default'); // default
  console.log(0 || 'default'); // default
  console.log('' || 'default'); // default
  console.log(NaN || 'default'); // default

  //(??) is a new JS operator allowing basically to provide a "default value" when the accessed one is either null or undefined.
  // with nullishCoalescing operator
  // #1 - Nullish Coalescing Operator (??) - It returns the right-hand operand when the left-hand operand is null or undefined.
  console.log(null ?? 'default');
  console.log(undefined ?? 'default');
  console.log(false ?? 'default');
  console.log(0 ?? 'default');
  console.log('' ?? 'default');
  console.log(NaN ?? 'default');
};
