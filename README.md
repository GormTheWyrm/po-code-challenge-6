# Coding Questions

For Java and Python;

Write a code to Convert sorted array to balanced binary search tree.


For Python:

Create a function whose return value always passes equality checks.



For JavaScript:

The additive persistence of an integer, n, is the number of times you have to replace n with the sum of its digits until n becomes a single digit integer.

The multiplicative persistence of an integer, n, is the number of times you have to replace n with the product of its digits until n becomes a single digit integer.

Create two functions that take an integer as an argument and:

Return its additive persistence.
Return its multiplicative persistence.
Examples: Additive Persistence
additivePersistence(1679583) --> 3
// 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39
// 3 + 9 = 12
// 1 + 2 = 3
// It takes 3 iterations to reach a single-digit number.

additivePersistence(123456) --> 2
// 1 + 2 + 3 + 4 + 5 + 6 = 21
// 2 + 1 = 3

additivePersistence(6) --> 0
// Because 6 is already a single-digit integer.
Examples: Multiplicative Persistence
multiplicativePersistence(77) --> 4
// 7 x 7 = 49
// 4 x 9 = 36
// 3 x 6 = 18
// 1 x 8 = 8
// It takes 4 iterations to reach a single-digit number.

multiplicativePersistence(123456) --> 2
// 1 x 2 x 3 x 4 x 5 x 6 = 720
// 7 x 2 x 0 = 0

multiplicativePersistence(4) --> 0
// Because 4 is already a single-digit integer.
Notes
The input n is never negative.

Examples
equals() == 0 --> True

equals() == [] --> True

equals() == (lambda: 1) --> True

Logical Reasoning:

A watch, which loses time uniformly, was observed to be 5 minutes fast at 8.00 p.m. on Thursday. It was noticed to be 7 minutes slow at 8.00 a.m. on the subsequent Monday. When did the watch show the correct time ? Explanation needed.

a) 7 a.m. Saturday b) 7 a.m. on Friday

c) 10a.m. on Sunday d) 11 a.m. on Friday