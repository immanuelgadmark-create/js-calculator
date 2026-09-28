'use strict';

/**
 * JavaScript Calculator
 * Performs basic arithmetic and keeps a history of every successful calculation.
 */

// Stores one object per calculation: { operation, a, b, result }
const history = [];

// ---------- Arithmetic functions ----------

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero.');
  }
  return a / b;
}

// Maps an operation name to its function and display symbol.
const operations = {
  add: { fn: add, symbol: '+' },
  subtract: { fn: subtract, symbol: '-' },
  multiply: { fn: multiply, symbol: '*' },
  divide: { fn: divide, symbol: '/' },
};

// ---------- Core logic ----------

function isValidNumber(value) {
  return typeof value === 'number' && Number.isFinite(value);
}

/**
 * Runs an operation, records it in history, and returns the result.
 * Throws an Error (and records nothing) if the input is invalid.
 */
function calculate(operationName, a, b) {
  const operation = operations[operationName];

  if (!operation) {
    throw new Error(`Unknown operation: "${operationName}".`);
  }
  if (!isValidNumber(a) || !isValidNumber(b)) {
    throw new Error('Both inputs must be valid numbers.');
  }

  const result = operation.fn(a, b);
  history.push({ operation: operationName, a, b, result });
  return result;
}

// ---------- History display ----------

function displayHistory() {
  console.log('\n--- Calculation History ---');

  if (history.length === 0) {
    console.log('No calculations yet.');
    return;
  }

  history.forEach((entry, index) => {
    const { symbol } = operations[entry.operation];
    console.log(`${index + 1}. ${entry.a} ${symbol} ${entry.b} = ${entry.result}`);
  });
}

// ---------- Demo ----------

function runDemo() {
  const tests = [
    ['add', 10, 5],
    ['subtract', 10, 5],
    ['multiply', 10, 5],
    ['divide', 10, 5],
    ['divide', 10, 0], // should fail and NOT be recorded
    ['power', 2, 3], // unknown operation
    ['add', 'ten', 5], // invalid input
  ];

  tests.forEach(([operationName, a, b]) => {
    try {
      const result = calculate(operationName, a, b);
      console.log(`${operationName}(${a}, ${b}) -> ${result}`);
    } catch (error) {
      console.log(`${operationName}(${a}, ${b}) -> Error: ${error.message}`);
    }
  });

  displayHistory();
}

// Run the demo only when executed directly (node calculator.js),
// not when the file is imported by another module.
if (require.main === module) {
  runDemo();
}

module.exports = { add, subtract, multiply, divide, calculate, displayHistory, history };