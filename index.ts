/*
 * Given a string, returns the length 
 * of the largest run in the string.
 *
 * @author  Curtis Edwards
 * @version 1.0
 * @since   2024-03-25
 */

import { createPrompt } from 'bun-promptx'


function maxRunFunction(string) {
  /*
   * this function calculates the max run of a string
   */
  let maxRun = 1
  let previousChar = ""
  console.log(string.length)

  for (let i = 0; i < string.length; i++) {
    let currentRun = 1
    if (previousChar === string[i]) {
      currentRun++
      if (currentRun > maxRun) {
        maxRun = currentRun
      }
    }
    previousChar = string[i]
  }

  return maxRun
}


// input
const userString = createPrompt("Enter a string: ")
const string = userString.value
// error check
if (string.length === 0) {
  console.log("Invalid input.")
} else {
  // process
  let maxRun = maxRunFunction(string)
  // output
  console.log(`The string "${string}" has a max run of ${maxRun}!`)
}

console.log("\nDone.")
