// 1 spread

// const numbers = [1, 2, 3, 4, 5, 6];
// const numbers2 = [4, 32, 35, 64, 75, 86];
// const numbers3 = [61, 42, 453, 14, 15, 26];
// console.log(...numbers);
// const newNumbers = [...numbers, ...numbers2, ...numbers3];
// console.log(newNumbers);

// const temps = [18, 14, 23, 34, 12];
// const minTemps = Math.min(...temps);
// console.log(minTemps);
// const minTemps1 = Math.min.apply(null, temps);
// console.log(minTemps1);

// const obj = {
//   x: 1,
//   m: 2,
// };
// const obj2 = {
//   x: 5,
//   q: 18,
// };

// const newObj = { ...obj, ...obj2, a: 15, b: [45, 18] };
// console.log(newObj);
const defaultSettings = {
  theme: "light",
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};
console.log(finalSettings);
