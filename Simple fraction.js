//Given a string representing a simple fraction x/y, your 
//function must return a string representing the corresponding 
//mixed fraction in the following format: [sign]a b/c
with(Math)F=(s,a=s.split`/`.map((x,i)=>+x,f=(
x,y)=>y?f(y,x%y):x))=>{if(!a[1])throw ''
res=a[0]?`${~~(a[0]/a[1])||''} ${(d=a[0]%a[1])?abs(
d/(e=f(d,a[1])))+'/'+abs(a[1]/e):''}`.trim():'0'
return a[0]*a[1]<0&&abs(a[0])<abs(a[1])?'-'+res:res}