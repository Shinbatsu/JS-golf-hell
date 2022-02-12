//Your task is write the decorator for function which memorize 
//the output for given arguments and in that case if at 
//the next time function will get same input should be 
//return result from cache

//Example:
//t=memo(sum=(a,b)=>a+b)
//t(5,2)// -> 7
//t(5,2)// -> Cache: 7
//t(5,2)// -> Cache: 7
//t(5,2)// -> Cache: 7
//t(1,2)// -> 3

memo=(f,c={},i=console.log)=>(...a)=>{c[k=a.join``]?(i(`Cache: ${c[k]}`),c[k]):i(r=f(...a)),(c[k]=r),r}