//Write an algorithm that takes an array 
//and moves all of the zeros to the end, 
//preserving the order of the other elements.
//Example:
//F([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
F=a=>[...a.filter($=>$!==0),...a.filter($=>$===0)]
