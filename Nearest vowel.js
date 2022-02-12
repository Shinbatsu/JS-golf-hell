//Given a string of length n (where 100≥n≥0 100 \geq n \geq 0100≥n≥0) 
//consisting solely of alphabetic characters (A-Z, a-z) find each letter 
//distance from its nearest vowel. if they are a vowel return 0 indicating 
//its vowel, return this as an array of number with each number indicating 
//the distance of said letter from nearest vowel
f=s=>[...s].map(g=(Z,X,W)=>/[aeiou]$/X.test(s[X+Z*W])?Z:g(~-Z+!~W,X,-W|1))