//Given a number you should reverse his digits
//Note: also you should be think about forward minus and forward zeros after reversing

//Example:
//f(120) // 21
//f(-241)// -142
//f(0) // 0
f=d=>+[...''+Math.abs(d)].reverse``.join``*(d<0?-1:1)