// ---------- performance.now() --------
const startTime = performance.now();
for (let i = 0; i < 5000; i++) {
  console.log(i);
}
const endTime = performance.now();
console.log(`This code took ${endTime - startTime} ms`);

// --------- console.time(lebel) ------
console.time("task");
for (let i = 0; i < 5000; i++) {
  console.log(i);
}
console.timeEnd("task");

const firstArray = [];
const secondArray = [];

for (let i = 0; i < 600000; i++) {
  if (i < 300000) {
    firstArray.push(i);
  }
  secondArray.push(i);
}

console.log("first arr", firstArray.length);
console.log("second arr", secondArray.length);

// --------- linear ---------
console.time("map1");
const firstUserList = firstArray.map((number) => ({ userId: number }));
console.timeEnd("map1");

console.time("map2");
const secondUserList = secondArray.map((number) => ({ userId: number }));
console.timeEnd("map2");

console.time("find");
const user1 = secondUserList.find((user) => user.userId === 500000);
console.timeEnd("find");

// ------ constant --------
console.time("index");
const user2 = secondUserList[500000];
console.timeEnd("index");
