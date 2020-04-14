/*******************************************************************************************************************************
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

*********************************************************************************************************************************/




var addBinary = function(a, b) {
    a = a.split("").reverse().join("");                  //split and reverse the strings to make out lives a bit easier
    b = b.split("").reverse().join("");
    len = a.length > b.length ? a.length : b.length;    // find larger of two lengths
    result = [];                                        // store results 
    for(let i = 0; i < len; i += 1){
        num1 = Number(a[i] || 0);                       // check if the index exisits
        num2 = Number(b[i]) || 0;
        curr = Number(result[i]||0) + num1 + num2       // add them
        if(curr >= 2){                                  // check if sum > 2
            result[i] = curr%2;                         // perform operations
            result.push(1)
        }
        else{
            result[i] = curr
        }
    }
    return result.reverse().join("")                   //reverse and join for final result
};
