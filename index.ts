/*
 * this is the Palindrome program
 *
 * @author  Curtis Edwards
 * @version 1.0
 * @since   2024-04-09
 */

import { createPrompt } from 'bun-promptx'


function palindrome(string) {
  /*
   * This function calculates if a string is a palindrome
   */
  let reversedString = "";
    for (let counter = string.length - 1; counter >= 0; counter--) {
        reversedString += string[counter];
    }

  return reversedString
}


// input
const userString = createPrompt("Enter a string: ")
const string = userString.value
// error check
if (string.length === 0) {
  console.log("Invalid input.")
} else {
  // process
  let isPalindrome = palindrome(string)
  // output
  console.log(isPalindrome)
}

console.log("\nDone.")
