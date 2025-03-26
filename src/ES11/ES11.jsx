import React from 'react';
import { nullishCoalescingOperator } from './NullishCoalescingOperator';
import { optionalChaining } from './OptionalChaning';
import { promiseAllSettled } from './PromiseAllSettled';
import { stringMatchAll } from './stringMatchAll';

const ES11 = () => {
  // nullishCoalescingOperator();
  // optionalChaining();
  // promiseAllSettled();
  stringMatchAll();

  return (
    <div>
      New features of ES11
      <ul>
        <li>Big int</li>
        <li>Promsise allSettled</li>
        <li>Optional chaining</li>
        <li>Nullish Coalescing operator</li>
        <li>String match all</li>
      </ul>
    </div>
  );
};

export default ES11;
