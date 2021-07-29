//current date and time
var today = moment();
//Displays current day at the top of the page
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

//looks to see if there is anything stored and if not creates an empty object.
var allReminders=JSON.parse(localStorage.getItem("workHours"))||{};

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
      //color the sibling the same color
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
    if (allReminders[element.textContent]){

    $(element).siblings(".description").val(allReminders[element.textContent].description)
    $(element).siblings(".Reminder").val(allReminders[element.textContent].reminder)

    console.log(element.textContent)
}}

 $(".saveBtn").on('click', function(){

    var currentTime = {
        description: $(this).siblings(".description").val(),
        reminder: $(this).siblings(".Reminder").val(),
        time: $(this).siblings(".hour").text()
};
allReminders[currentTime.time]=currentTime;

localStorage.setItem("workHours",JSON.stringify(allReminders));

 
});



 



