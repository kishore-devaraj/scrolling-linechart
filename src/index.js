import React from 'react';
import './index.css';
import { init, unloadEvents } from './main.js';

export default class ScrollingLinechart extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        init();
    }

    render() {
        return (
            <div className="chartWrapper">
                <div className="chartAreaWrapper">
                    <div className="chartAreaWrapper2">
                        <canvas id="myChart"></canvas>
                    </div>
                </div>
                <canvas id="myChartAxis" height="300" width="0"></canvas>
            </div>
        );
    }
}