//Since the weather was good, some students decided to go for a 
//walk in the park after the first lectures of the new academic 
//year. There they saw a squirrel, which climbed a tree in a 
//spiral at a constant angle to the ground. They calculated 
//that in one loop the squirrel climbes h meters (vertical height), 
//the height of the tree is equal to H (v in Ruby), and the length 
//of its circumference equals S.These calculations were exhausting, 
//so now the students need your help to figure out how many meters 
//the path length of squirrel climbed when it reached the tree top. 
//The result should be rounded to 4 decimal places.
F=(h,H,S)=>+(H*(1+S*S/h/h)**.5).toFixed(4)