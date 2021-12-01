// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

const hasBalancedParens = (str) => {
    let left = '';
    let right = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            left += '(';
        } else if (str[i] === ')') {
            right += ')';
        }
    }

    if (left.length === right.length) {
        return true;
    }
    return false;
}

console.log(hasBalancedParens(sample1));
console.log(hasBalancedParens(sample2));
console.log(hasBalancedParens(sample3));
console.log(hasBalancedParens(sample4));