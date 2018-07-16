'use strict'
import { HeartBeat } from './heart-beat';
import * as utils from './utils';

// Global objects
let updateInterval;

export function init(){        
    let ctx = document.getElementById("myChart").getContext("2d");

    // Generating random stub data 
    let labels = [];
    for(let i = 0; i < 9; i++){
        labels.push(utils.getDummyDateLabel())
    }
    let data = [];
    for(let i = 0; i < 9; i++){
        data.push(utils.getRandomArbitrary(60,120))
    } 

    let chart = new HeartBeat(ctx, data, labels);

    // Updating data point to the graph for every 5 seconds
    updateInterval = setInterval(function () {
        let newData = utils.getRandomArbitrary(60,120);
        let newLabel = utils.getDummyDateLabel();
        chart.updateChart(newData, newLabel);
    }, 3000);
}


export function unloadEvents(){
    console.log('Unloading events')
    clearInterval(updateInterval);
}

// window.onload = init;
// window.unload = unloadEvents;