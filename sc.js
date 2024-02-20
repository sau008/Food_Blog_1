// var a = 6;
// function fun() {
//   var b = 100;
// }

// function fun1() {
//   console.log(a);
//   console.log(b);
// }

// fun();
// fun1();

// var f = 2;
// function a() {
//   var d = 100;
//   function c() {
//     console.log(d);
//     console.log(e);
//   }
//   c();
// }

// function b() {
//   console.log(f);
// }

// var e = 2;

// a();
// b();

// var c = {
//   name: "this is c object",
//   log: function () {
//     console.log(this);
//   },
// };

// console.log(c.name);
// console.log(c.log);

// var fullname = "piyush garg";
// var obj = {
//   fullname: "hacked dullname",
//   prop: {
//     fullname: "inside prop",
//     getfullname: function () {
//       return this.fullname;
//     },
//   },
//   getfullname: function () {
//     return this.fullname;
//   },
//   getfullnamev2: () => this.fullname,
//   getfullnamev3: (function () {
//     return this.fullname;
//   })(),
// };
// console.log(obj.prop.getfullname());
// console.log(obj.getfullname());
// console.log(obj.getfullnamev2);
// console.log(obj.getfullnamev3);

// var fullname = "piyush garg";
// var obj = {
//   fullname: "hacked dullname",
//   prop: {
//     fullname: "inside prop",
//     getfullname: function () {
//       return this.fullname;
//     },
//   },
//   getfullnamev3: (function () {
//     console.log(this);
//     return this.fullname;
//   })(),
// };
// console.log(obj.getfullnamev3);
// console.log(obj.prop.getfullname());

// var a = 5;
// function xyz(temp1, temp2) {
//   console.log("i am " + temp1 + " " + temp2);
// }

// xyz("Saurabh", "Kumar");

// var a = 6;
// function abc() {
//   console.log(a);
//   a = 7;
// }

// function xyz() {
//   var b = 7;
//   console.log(a + b);
//   var e = (function () {
//     //return a + b + d;
//     console.log(a);
//     console.log(b);
//     console.log(d);
//     console.log(a + b + d);
//   })();
//   var d = 8;
//   //console.log(e());
// }

// abc();
// xyz();

// function binarySearch(arr, val) {
//   // add whatever parameters you deem necessary - good luck!

//   let left = 0,
//     right = arr.length - 1,
//     middle = Math.trunc((arr.length - 1) / 2);
//   console.log("middle = " + right);
//   console.log("middle = " + middle);
//   while (middle <= 1) {
//     if (arr[middle] === val) {
//       return middle;
//     } else if (arr[middle] < val) {
//       left = middle;
//       middle = Math.trunc((left + right) / 2);
//     } else {
//       right = middle;
//       middle = Math.trunc((left + right) / 2);
//     }
//   }
//   return -1;
// }

// console.log(binarySearch([1, 2, 3, 4, 5], 3));

// function mergerArray(arr1, arr2) {
//   var results = [];

//   var i = 0,
//     j = 0,
//     arrayLenght = arr.length + arr2.length;

// while(i < arr1.length && j < arr2.length){
//     if(arr2[j] > arr1[i]){
//             results.push(arr1[i]);
//             i++;
//         } else {
//             results.push(arr2[j])
//             j++;
//         }
//     }
//     while(i < arr1.length) {
//         results.push(arr1[i])
//         i++;
//     }
//     while(j < arr2.length) {
//         results.push(arr2[j])
//         j++;
//     }
//     return results;
// }

//

//   while (arrayLenght > 0) {
//     if (arr1[i] <= arr2[j]) {
//       results.push(arr1[i]);
//       i++;
//     }
//     // else if(arr1[i]>arr2[j]){
//     //     results.push(arr2[j])
//     //     j++;
//     // }
//     else {
//       console.log("asd");
//     }

//     arrayLenght--;
//   }
// }

// function arraySlice(arr) {
//   if (arr.length <= 1) return arr;

//   let mid = Math.floor(arr.length / 2);
//   let left = arraySlice(arr.slice(0, mid));
//   let right = arraySlice(arr.slice(mid));
//   return mergerArray(left, right);
// }

// console.log(arraySlice([1, 4, 2, 123, 9, 554]));

// let arr = [4, 8, 2, 1, 5, 7, 6, 3];
// function merge(pivot, arr) {
//   let count = 0,
//     i = 0,
//     j = 1,
//     isFirst = true;

//   // let arr = [26, 23, 27, 44, 24, 21];

//   if (isFirst) {
//     if (arr[i] > arr[j]) {
//       count++;
//     }
//   }
//   j++;

//   while (j < arr.length) {
//     if (arr[i] > arr[j]) {
//       count++;
//       const temp = arr[j];
//       arr[j] = arr[count];
//       arr[count] = temp;
//     }
//     j++;
//   }
//   const temp = arr[count];
//   arr[count] = arr[pivot];
//   arr[pivot] = temp;
//   console.log(arr);
//   return count;
// }

// //merge();

// function mergeShort() {
//   let pivot = merge(0, arr);
//   let left = merge(pivot);

//   console.log("-------");
//   console.log(arr);
// }

// let ab = 123456;
// let count = 0;

// while (ab > 0) {
//   ab = Math.floor(ab / 10);
//   count++;
//   //console.log(ab)
// }

// console.log(count);

const findCounts = (str) => {
  var obj = {};
  for (var key of str) {
    if (!obj[key]) {
      obj[key] = 1;
    } else {
      obj[key] += 1;
    }
  }

  return obj;
};

console.log(findCounts("Saurabh12hasjhskshdkatttt"));
