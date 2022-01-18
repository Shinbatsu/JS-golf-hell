//Given an array of positive integers, 
//return true if the average of its elements 
//is an integer and false otherwise.
F=a=>!(eval(a.join`+`)%a.length)