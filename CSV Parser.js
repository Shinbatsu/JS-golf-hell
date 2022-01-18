//Input:
    //one,"two wraps
    //onto ""two"" lines",three
    //4,,6
//Output:
    //[
    //  ["one", 'two wraps\nonto "two" lines', "three"],
    //  ["4", "", "6"],
    //];
F=(i,t,s)=>{for(r=[],i=i[p="split"](n="\n");i[e="length"];r[r[e]]=o)for(
l=i[h="shift"]()[p](t=t||","),o=[];l[e];o[o[e]]=f)if((f=l[h]())[0]==(s=s||'"')){
for(;!(f[p](s)[e]%2);)f+=l[e]?t+l[h]():n+(l=i[h]()[p](t))[h]();for(f=f[c="slice"](
1,x=-1);1+(x=f.indexOf(s+s),x);f=f[c](0,x)+f[c](++x));}return r}