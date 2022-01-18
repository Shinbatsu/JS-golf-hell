//You're given an array of integers a and two integers x and y. 
//Count the number of elements in the array such that `x ≤ a[i] ≤ y, 
//where i is the 0-based index of the element.
F=(a,x,y,d=0)=>a.map(v=>d+=x>v==v>y)|d