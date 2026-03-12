function charCount(str) {
    let count = {};
    for (let ch of str) {
        if (count[ch]) {
            count[ch]++;
        } else {
            count[ch] = 1;
        }
    }
    return count;
}

console.log(charCount("programming"));

