function sum(...numbers) {
    let result = 0;

    for (const num of numbers) {
        result += num;
    }

    return result;
}

console.log(sum(1, 2));
console.log(sum(1, 6, 3));
console.log(sum(1, 7, 6, 4)); 