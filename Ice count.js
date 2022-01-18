//Given a string s, count the number of "ice" in the string.
//Note: It's "ice", not Word; case insensitive; It can be 
//continuous or discontinuous. However, the position of 
//any two words cannot be overlapped.
F=s=>s.split(/i.*?c.*?e/i).length-1