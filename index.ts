/*
 * Given a string, returns the length 
 * of the largest run in the string.
 *
 * @author  Curtis Edwards
 * @version 1.0
 * @since   2024-03-25
 */

import { createPrompt } from 'bun-promptx'


function maxRun(string) {
  /*
   * this function calculates the max run of a string
   */
  let maxRun = 1
  let previousChar = ""

  for (let char of string) {
    let currentRun = 1
    if (previousChar === char) {
      currentRun++
      if (currentRun > maxRun) {
        maxRun = currentRun
      }
    }
    let previousChar = char
  }

  return maxRun
}


// input
const userString = createPrompt("Enter a string: ")
let string = userString.value
let maxRun = maxRun(string)
// output
console.log(`The string ${string} has a max run of ${maxRun}!`)
// error check
/*if (string.length === 0) {
  console.log("Invalid input.")
} else {
  // process
  let maxRun = maxRun(string)
  // output
  console.log(`The string ${string} has a max run of ${maxRun}!`)
}*/

console.log("\nDone.")
