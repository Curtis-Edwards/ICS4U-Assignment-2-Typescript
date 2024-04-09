/*
 * this is the Palindrome program
 *
 * @author  Curtis Edwards
 * @version 1.0
 * @since   2024-04-09
 */

import { createPrompt } from 'bun-promptx'


function palindrome(userString: string): boolean {
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
  if (userString === reversedString) {
    isPalindrome = true
  } else {
    isPalindrome = false
  }

  return isPalindrome
}


// input
const string = createPrompt("Enter a string: ")
const userString = userString.value
// error check
if (userString.length === 0) {
  console.log("Invalid input.")
} else {
  // process
  let isPalindrome = palindrome(userString)
  // output
  if (isPalindrome) {
    console.log(`${userString} is a palindrome.`)
  } else {
    console.log(`${userString} is NOT a palindrome.`)
  }
}

console.log("\nDone.")
