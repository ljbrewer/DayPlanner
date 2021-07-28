//current date and time
var today = moment(); 
//Displays current day at the top of the page
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));


// saves data to localStorage
function saveReminders() {
    localStorage.setItem("workHours", JSON.stringify(workHours));
}
// sets any data in localStorage to the view
function displayReminders() {
    workHours.forEach(function (_thisHour) {
        $(`#${_thisHour.id}`).val(_thisHour.reminder);
    })
}



// creates the visuals for the scheduler body
workHours.forEach(function (thisHour) {

    // creates timeblocks row
    var hourRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);

    // creates time field
    var hourField = $("<div>")
        .text(`${thisHour.hour}${thisHour.meridiem}`)
        .attr({
            "class": "col-md-2 hour"
        });

    // creates schdeduler data
    var hourPlan = $("<div>")
        .attr({
            "class": "col-md-9 description p-0"
        });
    var planData = $("<textarea>");
    hourPlan.append(planData);
    planData.attr("id", thisHour.id);
    if (thisHour.time < moment().format("HH")) {
        planData.attr({
            "class": "past",
        })
    } else if (thisHour.time === moment().format("HH")) {
        planData.attr({
            "class": "present"
        })
    } else if (thisHour.time > moment().format("HH")) {
        planData.attr({
            "class": "future"
        })
    }
    
    // creates save button
    var saveButton = $("<i>Save</i>")
    var savePlan = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
        });
    savePlan.append(saveButton);
    hourRow.append(hourField, hourPlan, savePlan);
})

// saves data to be used in localStorage
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    myDay[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
    console.log(saveIndex);
    saveReminders();
    displayReminders();
})