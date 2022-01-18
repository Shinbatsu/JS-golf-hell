//Typically, reversing an array is a pretty straightforward 
//task even for novice programmers. But not when a crowd of 
//angry zombies scratching your door, looking for a fresh brains. 
//In this case even skilled ninja-geek probably prefer to quickly 
//push his code on github to have enough time to find a chainsaw. 
//So there's two obstacles:
F=a=>a.sort(_=>1)
F=a=>a.map(a.pop,[...a])