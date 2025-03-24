import React from 'react';
import { nullishCoalescingOperator } from './NullishCoalescingOperator';
import { optionalChaining } from './OptionalChaning';
import { promiseAllSettled } from './PromiseAllSettled';

const ES11 = () => {
  nullishCoalescingOperator();
  optionalChaining();
  promiseAllSettled();
  return (
    <div>
      New features of ES11
      <ul>
        <li>Promsise allSettled</li>
        <li>Optional chaining</li>
        <li>Big int</li>
        <li>Nullish Coalescing operator</li>
      </ul>
    </div>
  );
};

export default ES11;
