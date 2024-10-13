function arrSort(arr) {
    let swapped = true;
    let n = arr.length;

    while (swapped) {
        swapped = false;

        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--;
    }
}

const arr = [3, 8, 7, 6, 5, -4, 3, 2, 1];
arrSort(arr);
console.log(arr); // Output: [-4, 1, 2, 3, 3, 5, 6, 7, 8]