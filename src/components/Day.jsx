import PropTypes from 'prop-types';

function Day(props) {
    return (
        <>
            <h5>Day: {props.day}</h5>
            <h5>Location: {props.location}</h5>
            <h5>Hours: {props.hours}</h5>
            <h5>Booth: {props.booth}</h5>
        </>
    )
}

Day.propTypes = {
    day: PropTypes.string,
    location: PropTypes.string,
    hours: PropTypes.string,
    booth: PropTypes.string
}

export default Day;
