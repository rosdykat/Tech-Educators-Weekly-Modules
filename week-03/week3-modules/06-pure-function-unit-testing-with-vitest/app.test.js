// app.test.js
import { findMaxValue, factorial, areArraysEqual, toTitleCase } from "./app";
import { test, describe, expect } from "vitest";

describe("maxValueTest", function () {
  test("find the max value from an array", function () {
    expect(findMaxValue([3, 7, 2, 8, 5])).toBe(8);
  });
});

// I cant get factorial to work unless the toBe is set to null. I don't think this is correct. As if i change the expect to 5, it is not working as the tobe as 120. This makes me think the app.js data would need to be changed.

// FIXED - I had the number in [], when it does not need to be in one, as it is not an array.

describe("factorial", function () {
  test("calculate the factorial of a number", function () {
    expect(factorial(7)).toBe(5040);
  });
});

// factorial(5); // 120
// factorial(0); // 1
// factorial(-3); // null
// factorial("5"); // null

// This one works!

describe("areArraysEqual", function () {
  test("check if two arrays are equal", function () {
    expect(areArraysEqual([1, 2, 4], [1, 2, 3])).toBe(false);
  });
});

// areArraysEqual([1, 2, 3], [1, 2, 3]); // true
// areArraysEqual([1, 2, 3], [3, 2, 1]); // false
// areArraysEqual([], []); // true
// areArraysEqual([1, 2], [1, 2, 3]); // false

describe("toTitlecase", function () {
  test("convert a string to a title case", function () {
    expect(toTitleCase("HELLO WORLD")).toBe("Hello World");
  });
});

// toTitleCase("hello world"); // "Hello World"
// toTitleCase("JAVASCRIPT IS FUN"); // "Javascript Is Fun"
// toTitleCase("123 testing titles"); // "123 Testing Titles"
// toTitleCase(12345); // ""
