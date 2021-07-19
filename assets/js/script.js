//current date and time
var today = moment();
//Displays current day at the top of the page
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

var workHours= [
    {
        id: "1",
        hour: "9",
        description: "",
        reminder: ""
    } ,  
      {
        id: "2",
        hour: "10",
        description: "",
        reminder: ""
    },
    {
        id: "3",
        hour: "11",
        description: "",
        reminder: ""
    },

    {
        id: "4",
        hour: "12",
        description: "",
        reminder: ""
    },
    {
        id: "5",
        hour: "1",
        description: "",
        reminder: ""
    },
    {
        id: "6",
        hour: "2",
        description: "",
        reminder: ""
    },
    {
        id: "7",
        hour: "3",
        description: "",
        reminder: ""
    },
    {
        id: "8",
        hour: "4",
        description: "",
        reminder: ""
    }, 
    {
        id: "9",
        hour: "5",
        description: "",
        reminder: ""
    },
];

if (document.getElementsByClassName("hour") < moment().format("HH A")) {
    $("div:hour").addClass("past")
} else 
    if (document.getElementsByClassName("hour") = moment().format("HH A")){
        $("div:hour").addClass("present")
    } else
        $("div:hour").addClass("future")




// saves data to localStorage
//function saveHoursData(hour) {
   
      // save some stuff  
//}

    



