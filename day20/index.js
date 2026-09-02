const set = new Set([1,2,3,4,3,4,3,4,2,6,7]);
console.log(set); // Set(7) { 1, 2, 3, 4, 6, 7 }
console.log(set.size)

const map = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);
map.set(4, 'four');
console.log(map); // Map(4) { 1 => 'one', 2 => 'two', 3 => 'three', 4 => 'four' }


const fact= (n) => {
  if (n === 0 || n === 1) {
    return 1;
    }
    return n * fact(n - 1);
}

 console.log(fact(10))

const arr = [1, 2, 3, 4, 5];
 Array.prototype.customFilter = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
}
const d = arr.customFilter((num) => num % 2 === 0);
console.log(d);