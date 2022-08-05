let btn = document.getElementById("send");

btn.addEventListener(("click"),()=>{
    let message = document.getElementById("message").value; 
   
    if(message == NaN || message == null || message == ""){
                alert("enter a correct value");
    }
    else{
        document.getElementById("reply").textContent = "Message deliverd";
        document.getElementById("yourmsg").textContent = message;
        
    }
})



