# JavaScript Block Scope Confusion

This example demonstrates a common source of confusion in JavaScript: block scope. The variable `x` is declared twice, once in the outer scope and once in the inner `if` block.  The inner `x` is only visible within the `if` block; it doesn't overwrite the outer `x`. This can lead to unexpected results if not properly understood.