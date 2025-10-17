import React from 'react';
import { globalIterator } from './globalIterator';

const ES16 = () => {
  const runGlobalIteratorExamples = () => {
    globalIterator();
  };

  return (
    <>
      <h2>New features of ES16 (ES2025)</h2>
      <ul>
        <li>
          <strong>Global Iterator Methods</strong>
          <ul>
            <li>Iterator.range() - Create numeric ranges</li>
            <li>Iterator.from() - Convert iterables to iterators</li>
            <li>Iterator.zip() - Combine multiple iterables</li>
            <li>Enhanced iterator helper methods (map, filter, take, etc.)</li>
          </ul>
        </li>
      </ul>

      <button
        onClick={runGlobalIteratorExamples}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007acc',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '10px',
        }}>
        Run Global Iterator Examples
      </button>

      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <p>
          <strong>Note:</strong> Some ES16 features may not be fully implemented in current
          browsers. The examples include polyfills and demonstrate both new ES16 approaches and
          pre-ES16 alternatives.
        </p>
      </div>
    </>
  );
};

export default ES16;
