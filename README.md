#  String Calculator
This classic kata guides you step by step through the implementation of a calculator that receives a String as input. It is a good exercise on refactoring and incremental implementation. It is also a good candidate for practising TDD.

## First step
Create a function add that takes a String and returns a String:

`String add(String number)`
- The method can take 0, 1 or 2 numbers separated by comma, and returns their sum.
- An empty string will return “0”.
- Example of inputs: "", "1", "1,2".

## Many numbers
Allow the add method to handle an unknow number of arguments.

## Newline as separator
Allow the Add method to handle new lines between numbers (instead of commas).
- Example: `“1\n2,3”` should return 6.
- Example: `“1,\n”` is invalid, but you don’t need a test for this case.
- Only test correct inputs – there is no need to deal with invalid inputs for this kata.

## Negative numbers
Calling Add with a negative number will throw an exception “Negatives not allowed: “ listing all negative numbers that were in the list of numbers.
- Example `“-1,2”` throws “Negatives not allowed: -1”
- Example `“2,-4,3,-5”` throws “Negatives not allowed: -4,-5”


## Numbers bigger than 1000
Numbers bigger than 1000 should be ignored.
- Example: `“1001,2”` returns 2

## Custom separators
Allow the Add method to handle a different delimiter:
- To change the delimiter, the beginning of the string will contain a separate line that looks like this: `“//[delimiter]\n[numbers]”`
- Example: `“//;\n1;2”` should return 3 (the delimiter is ;)
- This first line is optional; all existing scenarios (using , or \n) should work as before.

## Other operations
Write a function for multiply with same rules
