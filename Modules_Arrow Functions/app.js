
 
const marks = require('./4-utilsValues')
var mymarks = 56; 

if(mymarks >= marks.FCD_Cutoff)
console.log("First Class with Distinction"); 
else if(mymarks >= marks.FC_Cutoff && mymarks < marks.FCD_Cutoff)
console.log("Fist Class")
else if(mymarks >= marks.SC_Cutoff && mymarks < marks.FC_Cutoff)
console.log("Second Class")
else if(mymarks >= marks.Pass_Cutoff && mymarks < marks.SC_Cutoff)
console.log("Pass")
else 
console.log("Fail")


const { add } = require('./3-utilsFunctions')
console.log(`Result of addition is `+ add(2,3))

/* Another way of calling a function from a user-defined module */
const sub = require('./3-utilsFunctions')
console.log(`Result of Subtraction  is `+sub.sub(2,3))

/*NOTE: `` is called template string - used to dynamically substitute 
values or do simple processing */ 

