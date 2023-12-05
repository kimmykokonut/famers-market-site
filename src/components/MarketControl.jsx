import React from 'react';
import MarketSchedule from './MarketSchedule';
import Button from './Button';

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

        if (this.state.dayCounter === 0) {
            visibleDay = <MarketSchedule />
        }
        return (
            <>
                {visibleDay}
                {/* <Button
                    id="btnDay"
                    text={visibleDay.day}
                /> */}
                <button onClick={this.handleClick}>Change Day</button>
            </>
        )
    }

}

export default MarketControl;