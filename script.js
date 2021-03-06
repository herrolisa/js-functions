// Please make sure all your code is added inside the `runAfterTests` function.
function runAfterTests() {
  /**
   * Follow the comments below.
   * Feel free to use `console.log` to see what values are being returned.
   */

  // Create a variable called `myNumber`, and assign it to any number
  var myNumber = 2;

  /**
   * Create another variable called `stringValue`.
   * Assign it the value that's returned when you pass
   * `myNumber into the function `numberToString`.
   */
   var stringValue = numberToString(myNumber);
   console.log(stringValue);

  /**
   * If you pass `myNumber` and `stringValue` into `areEqual`,
   * what value will you get back? Why is that?
   */
   console.log(areEqual(myNumber,stringValue));
   console.log("The result is false. Although the values are the same, the data types are different and the function compares using strict equality.");

  /**
   * You may have noticed that the `calculate` function combined
   * the functionality of `add`, `subtract`, `multiply`, and `divide`.
   * Did you try to use those functions _inside_ of `calculate`?
   * If you didn't go back and try it, this is called "reusability"!
   */
   console.log("Yes! I did notice and used those functions in my 'calculate' function.");

  //Do you see any other functions where code could be reused?
  console.log("I reused the 'divide' function in 'letterGrade' and reused the 'square' function in 'createCircle'.");

  /**
   * For your `letterGrade` function,
   * what happens if you provide a `score` that is less than 0,
   * or greater than the `total` value?
   * Does it still work as expected? If it doesn't, how could you improve this?
   */
   console.log("Yes, it still works as expected. It's possible for the score to be greater that the total value if there were extra credit points awarded. If the student were to get all answers correct and receive the extra credit points, the percentage would be over 100%, which would still be an A grade. If the score is less than 0, the grade would be an F, however this doesn't make sense since the lowest score you could receive is 0. However, you could put a conditional statement to ensure that the score provided is at least 0, to correct errors in human input.");


  /**
   * Your `combine` function looks okay,
   * but what if you wanted to join it with ANY string instead of a single space?
   * Create a new function called `improvedCombine`,
   * with the same parameters as `combine`, but also add a
   * third parameter called `glue` (a string value).
   */

   function improvedCombine(word1, word2, glue) {
     return word1 + glue + word2;
   }

  // What happens if you were to uncomment the following lines?

  combine = improvedCombine;
  console.log(combine('combine', 'improved!', ' is '));
  console.log("The function 'combine' has been replaced by 'improvedCombine' and now uses any string to combine two strings.");
}
