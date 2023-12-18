// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?


// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)



setInterval(clock,1000)

function clock(){
    let hour = new Date().getHours();
    const min = new Date().getMinutes();
    const sec = new Date().getSeconds();
    let period = "AM";
    if(hour>12){
        hour-=12;
        period = "PM";
    }
    console.log(`${hour}:${min}::${sec} ${period}`);
}

