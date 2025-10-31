const fajla = { userName: "fajla" };
const fariha = { userName: "fariha" };
const elma = { userName: "elma" };
const faija = { userName: "faija" };

const UserSet = new Set();
UserSet.add(fajla);
UserSet.add(faija);
UserSet.add(fariha);
UserSet.add(elma);
UserSet.add(elma);

const arr = ["mango", "apple", "banana", "apple"];
const arrSet = new Set(arr);
// --------- only given array method is forEach -----------
arrSet.forEach((value) => console.log(value));
// ------ convert to array -----------
const test = Array.from(arrSet);
test.push("tomato");

const isHas = arrSet.has("tomato"); // it's only return boolean
const arrDelete = arrSet.delete("tomato"); //  it's only return boolean
console.log(arrDelete);

// --------- practical example ----------
const fruits = ["mango", "apple", "banana", "apple"];

// Set implementation
const removeDupSet = (arr) => {
  const set = new Set(arr);
  return Array.from(set);
};
console.log(removeDupSet(fruits));

// brute force
const removeDup = (arr) => {
  const unique = [];
  arr.forEach((item) => {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  });
  return unique;
};
console.log(removeDup(fruits));
