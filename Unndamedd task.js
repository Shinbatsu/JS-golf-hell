//In an old village, people work with numbers in a very strange way. 
//To compare two positive integers, they compare their digits from right 
//to left until they differ. The number which has the greatest digit at 
//that position is considered bigger than another one.
//For example, 29 > 10331 because 9 > 1, and 45 < 145 because 45 can be written as 045 and 0 < 1.
//You are given an array of pairwise distinct positive integers. 
//Find the kth (0-based) number of thatarray after it is sorted 
//by the people of the old village.
F=(a,k)=>a.sort(f=(x,y)=>x%10-y%10||f(0|x/10,0|y/10))[k]