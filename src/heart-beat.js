import $ from 'jquery';
import Chart from 'chart.js';
import * as utils from './utils.js';

export function HeartBeat(ctx, data, labels){
    this.ctx = ctx;
    this.data = data;
    this.labels = labels;

    // Defining the chart config object
    let chart = {
        type: 'line',
        data: {
            labels: this.labels,
            datasets: [
                {
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: this.data
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            // Make the pointy line graph
            elements:{
                line: {
                    tension: 0.0000001
                }
            },
            // If the label is not defined don't show it
            legend: {
                labels: {
                   filter: function(label) {
                      if (label.text !== undefined) return true;
                   }
                }
             },

             // Customizing the tooltip
             tooltips: {
                 intersect: false,
                 callbacks: {
                    label: function(tooltipItem, data) {

                        // Define the view data of the tooltip
                        let tooltipValue = utils.getMonthName(new Date().getMonth()) + ' ' + new Date().getDate() + ', '
                        + new Date().getFullYear() + 
                         ': ' + Math.round(tooltipItem.yLabel)

                        return tooltipValue;
                    }
                }
             },
            events : ['click'],
            animation: {
                    onComplete: function(animation) {
                        let sourceCanvas = this.chart.chart.canvas;
                        let copyWidth = this.chart.scales['y-axis-0'].width - 10;
                        let copyHeight = this.chart.scales['y-axis-0'].height + this.chart.scales['y-axis-0'].top + 10;
                        let targetCtx = document.getElementById("myChartAxis").getContext("2d");
                        targetCtx.canvas.width = copyWidth;
                        targetCtx.drawImage(sourceCanvas, 0, 0, copyWidth, copyHeight, 0, 0, copyWidth, copyHeight);
                    }
            }
        },        
    };

    this.chart = new Chart(ctx, chart)


    // Function to update new values in chartjs
    this.updateChart = function (data, label){
        this.chart.data.datasets[0].data.push(data);
        this.chart.data.labels.push(label);
        
        let newwidth = $('.chartAreaWrapper2').width() + 60;
        $('.chartAreaWrapper2').width(newwidth);
        $('.chartAreaWrapper').animate({scrollLeft:newwidth});
    }
}