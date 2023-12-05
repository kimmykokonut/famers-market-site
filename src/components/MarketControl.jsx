import React from 'react';
import Day from './Day';

const marketSchedule = [
    {
        day: "Sunday",
        location: "Lents International",
        hours: "9:00am - 2:00pm",
        booth: "4A"
    },
    {
        day: "Monday",
        location: "Pioneer Courthouse Square",
        hours: "10:00am - 2:00pm",
        booth: "7C"
    },
    {
        day: "Tuesday",
        location: "Hillsboro",
        hours: "5:00pm - 8:30pm",
        booth: "1F"
    },
    {
        day: "Wednesday",
        location: "Shemanski Park",
        hours: "10:00am - 2:00pm",
        booth: "3E"
    },
    {
        day: "Thursday",
        location: "Northwest Portland",
        hours: "2:00pm - 6:00pm",
        booth: "6D"
    },
    {
        day: "Saturday",
        location: "Beaverton",
        hours: "10:00am - 1:30pm",
        booth: "9G"
    }
];

class MarketControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dayCounter: 0
        };
    }

    handleClick = () => {
        this.setState(prevState => ({
            dayCounter: prevState.dayCounter + 1
        }));
    }

    render() {
        let visibleDay = null;

        if (this.state.dayCounter < 6) {
            visibleDay = marketSchedule[this.state.dayCounter];
            console.log(this.state.dayCounter);
        } else {
            console.log("you re in else");
            this.setState({ dayCounter: 0 });
            console.log(this.state.dayCounter);
            visibleDay = marketSchedule[this.state.dayCounter];
        }
        return (
            <>
                <h3>Market Info</h3>
                <Day
                    day={visibleDay.day}
                    location={visibleDay.location}
                    hours={visibleDay.hours}
                    booth={visibleDay.booth}
                    key={this.state.dayCounter} />

                <button onClick={this.handleClick}>Change Day</button>
            </>
        )
    }

}

export default MarketControl;