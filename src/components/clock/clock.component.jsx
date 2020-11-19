import React from 'react';
import './clock.styles.scss';
import EasyTimer from 'easytimer';

class Clock extends React.Component {
    defaultSeconds = 5;

    state = {
        timer: new EasyTimer(),
        timeValues: this.defaultSeconds
    };

    componentDidMount() {
        const {timer} = this.state;
        timer.start({countdown: true, startValues: {seconds: this.defaultSeconds}});
        timer.addEventListener("secondsUpdated", this.secondPassed);
        timer.addEventListener("targetAchieved", this.timerDone);
    }

    secondPassed = (e) => {
        let {timer} = this.state;
        const timeValues = timer.getTimeValues().toString();
        this.setState({timeValues: timeValues});
    }

    timerDone = (e) => {
        console.log("done");
    }

    render() {
        return <div className="clock">{this.state.timeValues}</div>;
    }
}

export default Clock;