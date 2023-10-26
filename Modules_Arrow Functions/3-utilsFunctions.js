//exports.add = (a , b) => a+b; 

const { myModules } = require("module");

const add = (a , b) => a+b;
const mul = (a , b) => a*b;
const sub = (a , b) => a-b;
const divide = (a , b) => a/b;

module.exports = {add,sub,mul, divide}

/* NOTE: If we use "exports" there is no need to write "module.exports"
and specify the list of Modules. */