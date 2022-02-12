// Your will get a string like "aaaabBBaaBBBBaaaAcdeaa"
// Your task is write a function which return follow string a4b3a2b4a4cdea2
f=s=>s.replace(/(.)\1+/gi,(m,g)=>`${g}${t=m.length,t>1?t:''}`)