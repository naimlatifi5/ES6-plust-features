import React from 'react';
import { globalIterator } from './globalIterator';
import { loadConfig } from './loadJSConfig';
import config from './config.json' with { type: 'json' };

const ES16 = () => {
  const runGlobalIteratorExamples = () => {
    globalIterator();
  };


  const runJSONModuleExamples = () => {
    loadConfig();
  }

  console.log("=== ES16 JSON Module Example ===\n");
  console.log(config.theme);
  console.log(config.charts); // ['bar', 'line']

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
        <li>JSON module</li>
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



      <div>JSON module</div>
      <button
        onClick={runJSONModuleExamples}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007acc',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '10px',
        }}>
        Run JSON module Examples
      </button>


    </>
  );
};

export default ES16;
