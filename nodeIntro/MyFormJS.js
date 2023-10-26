
            function formSubmit() {
             //alert("Inside Form Submit"); 

                 let loginForm = document.getElementById("loginForm");
                 
                     let name1 = document.getElementById("username");
                     let email1 = document.getElementById("email");
                     let message1 = document.getElementById("message");
                     
                   
                     const name = name1.value;
                     
                     const email = email1.value;
                     const message = message1.value;
     
                     console.log(name);
                     console.log(email);
                     console.log(message);
                     var data = name + " " + email + " " + message; 
                     document.getElementById("myname").innerHTML = name; 
                     document.getElementById("myemail").innerHTML = email; 
                     document.getElementById("mymessage").innerHTML = message; 
                     document.getElementById("data").innerHTML = data;   
                     var x = document.getElementById('table1');
                        
                            x.style.visibility = 'visible';
                        
                 }
                



