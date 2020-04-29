/**********************************************************************************************************************************

Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".

************************************************************************************************************************************/

var backspaceCompare = function(S, T) {
    let i = S.length-1;
    let j = T.length-1;
    let countS = 0;
    let countT = 0;
    while(i>=0 || j>=0){
        while(i>=0 && (S[i] == '#' || countS>0)) S[i--] == '#' ? ++countS: --countS;
        while(j>=0 && (T[j] == '#' || countT>0)) T[j--] == '#' ? ++countT: --countT;
        //since index is zero based, 
        //i=-1 and j=-1 is only way to confirm that pointers had reached start of the strings.
        if(i < 0 || j < 0) return i == j;    
        if(S[i--] != T[j--]) return false;
    }
    return i == j;
};
