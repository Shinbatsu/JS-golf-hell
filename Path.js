//You are at position [0, 0] in maze NxN and you can 
//only move in one of the four cardinal directions 
//(i.e. North, East, South, West). Return true 
//if you can reach position [N-1, N-1] or false otherwise.
F=(maze,p=[[0,0]],a=maze.split`\n`.map(x=>[...x]),l=a.length)=>{
while(p.length&&([x,y]=p.pop``))if(a[y][x]!=`.`);else a[y][x]=`Y`,
[[x+1,y],[x,y+1],[x-1,y],[x,y-1]].filter(r=>r.every(e=>l>e&&e>-1))
.map(e=>p.push(e));return a[--l][l]==`Y`}