"use strict";
const arr = [1, 2, 3, 4];
const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i -= 1) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
    return arr;
};
const newArray = shuffle(arr);
console.log(newArray);
