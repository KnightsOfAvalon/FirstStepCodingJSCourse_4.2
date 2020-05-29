// Creates a user prompt, makes it lowercase (for case-insensitivity),
// and sets it equal to inputString
var inputString = prompt(
  "Please enter your haystack. Separate items with only a space (no commas).",
  "Ex: hay hay hay hay needle hay hay hay"
).toLowerCase();

// Creates the haystack variable and sets it equal to an array created
// from the inputString
var haystack = inputString.split(" ");

function findNeedle(haystackArray) {
  // Iterates through the array that is provided as a parameter
  for (i = 0; i <= haystackArray.length; i++) {
    // Creates a console message that reveals the array index of the needle
    if (haystackArray[i] === "needle") {
      console.log("Found the needle at index " + i + "!");
    }
  }
}

// Invokes the findNeedle function using haystack as an argument
findNeedle(haystack);
