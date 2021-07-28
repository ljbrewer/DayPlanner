//current date and time
var today = moment();
//Displays current day at the top of the page
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

//creat the array of the hours
let hour=document.querySelectorAll("div.hour");

//Loop thru the items in the array to color them
for (let index = 0; index < hour.length; index++) {
    var element = hour[index];
    //Get the sibling to the chosen element
    sibling=element.nextElementSibling;
  
    // if the current hour is past then add the class to make it past
    if (element.dataset.hour < moment().hour()) {

      element.classList.add("past");
      //color the siblint the same color
      sibling.classList.add("past");
      
    } else //the hour equals the current hour color it for Present time
        if (element.dataset.hour  == moment().hour()){

           element.classList.add("present");
            //color the siblint the same color
           sibling.classList.add("present");

    } else{
        //if the time is not past or present it must be future
            element.classList.add("future");
             //color the siblint the same color
            sibling.classList.add("future");

    }
}



// $(".saveBtn").on('click', function(){

//     var currentTime = {
//         description: $(this).siblings(".description").val,
//         reminder: $(this).siblings(".description").val,
//         time: $(this).siblings(".time").text
//     };




// localStorage.setItem("workHours",currentTime );

//   //  JSON.stringify(currentTime)//

// }


// //localStorage.setItem("workHours", JSON.stringify(workHours));


// //var lastHours =JSON.parse(localStorage.getItem("workHours"));


// // if (lastHours !== null){
// //     document.hour = lastHours.time;
// //     document.description = lastHours.description;
// //     document.reminder = lastHours.reminder;

// //}

// )  



