export const data = [
  { id: 1, title: "Title1", content: "Content 1" },
  { id: 2, title: "Title2", content: "Content 2" },
  { id: 3, title: "Title3", content: "Content 3" },
  { id: 4, title: "Title4", content: "Content 4" },
];

export const numbers = [1, 2, 3, 4, 5, 6];
const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
