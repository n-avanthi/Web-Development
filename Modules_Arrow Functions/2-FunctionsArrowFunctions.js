function greet(name)
{
    console.log("Hello "+name); 
}
setInterval (greet, 100, 'mydhili'); 
setInterval(() => {
    console.log('Greet the World after 10 previous hello greet')
},1000 )