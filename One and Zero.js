//You are given an odd integer n and a two-dimensional array s, 
//which contains n equal-sized arrays of 0s and 1s.
//Return an array of the same length as the elements of n, 
//such that its ith element is the one that appears most 
//frequently at the ith position of s' elements.
F=(n,a)=>a[0].map((e,i)=>a.map(x=>x[i]).sort()[n/2^0])