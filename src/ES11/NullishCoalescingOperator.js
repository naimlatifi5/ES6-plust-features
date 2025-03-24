export const nullishCoalescingOperator = () => {
  // previusly with default values
  console.log(null || 'default'); // default
  console.log(undefined || 'default'); // default
  console.log(false || 'default'); // default
  console.log(0 || 'default'); // default
  console.log('' || 'default'); // default
  console.log(NaN || 'default'); // default

  // with nullishCoalescing operator
  console.log(null ?? 'default');
  console.log(undefined ?? 'default');
  console.log(false ?? 'default');
  console.log(0 ?? 'default');
  console.log('' ?? 'default');
  console.log(NaN ?? 'default');
};
