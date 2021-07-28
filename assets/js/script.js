//current date and time
var today = moment();
//Displays current day at the top of the page
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

let hour=document.querySelectorAll("div.hour")
//console.log(hour);
    
for (let index = 0; index < hour.length; index++) {
    var element = hour[index]
    console.log(element +" element")
    let time=element.dataset.hour
 //   console.log(time +" time")
    
 //   var time = parseInt(element.dataset.hour);
    console.log(element.classList.value)
  
 console.log(moment().hour()+" moment hour")

    if (element.dataset.hour < moment().hour()) {

      element.classList.add("past")
      
    } else 
        if (element.dataset.hour  === moment().hour()){

           element.classList.add("present")
        

    } else{
       
            element.classList.add("future")
         

    }
    console.log(element.classList.value)
    console.log(element.dataset.hour + " data-hour")
}




    



