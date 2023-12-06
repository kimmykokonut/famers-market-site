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
        if (this.state.dayCounter > 4) {
            this.setState({ dayCounter: 0 });
        } else {
            this.setState(prevState => ({
                dayCounter: prevState.dayCounter + 1
            }));
        }
    }

    render() {
        let visibleDay = marketSchedule[this.state.dayCounter]

        return (
            <>
                <div id="marketMonths" className='text-center'>
                    <h3>Market Info</h3>
                    <button className="btn btn-success" onClick={this.handleClick}>Change Day</button>
                    <Day
                        day={visibleDay.day}
                        location={visibleDay.location}
                        hours={visibleDay.hours}
                        booth={visibleDay.booth}
                        key={this.state.dayCounter} />
                </div>
            </>
        )
    }

}
export default MarketControl;