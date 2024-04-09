/*
 * this is the Palindrome program
 *
 * @author  Curtis Edwards
 * @version 1.0
 * @since   2024-04-09
 */

import { createPrompt } from 'bun-promptx'


function palindrome(string: string): boolean {
  /*
   * This function calculates if a string is a palindrome
   */
  let reversedString: string = ""
  let isPalindrome: boolean
  // reverse string
    for (let counter = string.length - 1; counter >= 0; counter--) {
        reversedString += string[counter]
    }
  // check if string is palindrome
  if (string === reversedString) {
    isPalindrome = true
  } else {
    isPalindrome = false
  }

  return isPalindrome
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
  if (isPalindrome) {
    console.log(`${string} is a palindrome.`)
  } else {
    console.log(`${string} is NOT a palindrome.`)
  }
}

console.log("\nDone.")
