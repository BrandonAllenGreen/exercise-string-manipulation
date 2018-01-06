'use strict';
// In your HTML, create an text input and a button.
// The text input should only accept letters. No numbers.
const $input = $('#input');
const $button = $('#button');
const $output = $('#outputDiv');

//console.log('input', $input);


$button.on("click", () => {
  let testString = $input.val();
  $output.html(`<p><b>Reversed Text:</b> ${reversal(testString)}</p>
  <p><b>Alphabetical Text:</b> ${alphabits(testString)}</p>
  <p><b>Palindrome Text:</b> ${palindrome(testString)}`);
});
// console.log(testString);

// Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.
function reversal(str) {
  let reverse = str.split("").reverse().join("");
  return reverse; 
};

// Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.
function alphabits(str) {
  let alpha = str.split("").sort().join("");
  return alpha;
};
//console.log(alphabits("testing it"));

// Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
function palindrome(str) {
  let formatStr = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
  let palindromeCheck = formatStr.split('').reverse().join('');
    if(formatStr === palindromeCheck) {
      return (`${str}  <em>This is a palindrome</em>`)
    } else {
      return (`${str} <em>This is not a palindrome</em>`)
    }
};

// When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.
// The output of each of the functions should immediately appear as well.
//var testString = "";
// reversal(testString);
// alphabits(testString);
// palindrome(testString);