import React from 'react';
import './clock.styles.scss';
import EasyTimer from 'easytimer';

class Clock extends React.Component {
    state = {
        timer: new EasyTimer(),
        timeValues: ""
    };

    componentDidMount() {
        const {timer} = this.state;
        timer.start({countdown: true, startValues: {seconds: 5}});
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
        return <div className="App">{this.state.timeValues}</div>;
    }
}

export default Clock;