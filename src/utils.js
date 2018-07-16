'use strict';

// Global variables
let date, hours, minutes;

// Utils functions 
export function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

export function getDateLabel(){
    return new Date().getHours() + ':' + new Date().getMinutes();
}

export function getDummyDateLabel(){
    // Initialize date object if not already
    if(!date){
        date = new Date();  
        hours = date.getHours();
        minutes = date.getMinutes();
    }

    minutes += 10;
    if(minutes >= 60){
        minutes -= 60;
        hours += 1;
        hours = hours >= 24 ? hours-= 24 : hours;
    }
    
    return hours + ':' + minutes;
}

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

export function getMonthName(monthNo){
    return monthNames[monthNo];
}