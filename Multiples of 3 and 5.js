//Yet another one-line task involving threes and fives 
//(I know, I'm the worst), inspired by Sum of All the 
//Multiples of 3 or 5, in this kata you need to do exactly 
//what the name says: Return the sum of all numbers divisible 
//by three or five up to and including n in under 53 characters 
//in JS or 64 characters in R. No other restrictions or limitations :)
F=n=>(f=a=>(b=n/a^0)*a*++b/2)(3)+f(5)-f(15)