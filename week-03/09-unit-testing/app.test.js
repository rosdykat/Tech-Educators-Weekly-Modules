// test my sum function
// use tools and code from the vitest package --> import
import { test, describe, expect } from "vitest";
import { sum, multiply } from "./app";

describe("Sum Test", function () {
  test("adds 1 + 2 and the expected result is 3", function () {
    expect(sum(1, 2)).toBe(3);
  });
});

// test multiply function

describe("Multiply Tests", function () {
  test("multiply 2 times 6 and I get 12", function () {
    expect(multiply(2, 6)).toBe(12);
  });
});
// ========================================================
// import { test, describe, expect, vitest } from "vitest";
// destructuring --> extracting important individual items inside the folder/file

// vitest = {
//   key: "value",
//   key: "value",
//   test: function () {},
//   describe: function () {},
//   expect: function () {},
// };
// // test my multiply function

// without destructuring, we need to use dot notation to access those vitest methods
// vitest.test();
// vitest.describe();
// vitest.expect();

// with destructirng, we can call the methods directly
// test();
// describe();
// expect();
