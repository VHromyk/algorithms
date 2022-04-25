// Algorithm complexity O(n), where n - quantity of operations

// O(10)
// Linear search
const arrLinear = [7, 6, 1, 4, 9, 2, 3, 5, 8, 0];
let count = 0;

function linearSearch(arr, item) {
    for (let i = 0; i < arrLinear.length; i += 1) {
        count += 1;
        if (arr[i] === item) {
            return i;
        }
    }
    return null;
}

console.log(linearSearch(arrLinear, 1));
console.log('count = ', count);
