//You are given an integer array a that contains only digits 0-9. 
//Remove all zeros from the start and end of a.
//It is guaranteed that array a has at least two non-zero elements.
F=A=>eval(`[${/[^0,].+[^0,]/.exec(A)}]`)