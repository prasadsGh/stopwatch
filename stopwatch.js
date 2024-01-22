let val=prompt("Time(in seconds)?");
let counter=1;
function timer(){
    
    document.getElementById("timer").innerHTML=counter;
    counter++;
    if(counter>val) 
    {
       
        clearInterval(id);
         document.getElementById("timer").innerHTML="Time Out!"
    }
}


 let id = setInterval(timer,1000);