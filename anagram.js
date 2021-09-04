function anagrams(s, t) {
    return lower(s) === lower(t);
}

function lower(str) {
    return str.replace(/[^\w]/g).toLowerCase().split('').sort().join()
}   


console.log(anagrams('anagram','nagaram'))
