\# JavaScript Calculator



A simple calculator that performs addition, subtraction, multiplication and

division, and keeps a history of every successful calculation.



\## How to run

1\. Install Node.js

2\. Run: `node calculator.js`



\## Features

\- Four arithmetic functions: add, subtract, multiply, divide

\- History stored in an array of objects (operation, inputs, result)

\- `displayHistory()` prints all past calculations

\- Error handling for division by zero, unknown operations and invalid input

&#x20; (failed calculations are not saved to history)



\## Design notes

\- `calculate()` is the single place where results are recorded, so no

&#x20; calculation can skip the history.

\- An `operations` object maps names to functions, avoiding long if/else chains.

