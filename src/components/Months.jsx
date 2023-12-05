import PropTypes from 'prop-types';

function Months(props) {
    const selection = props.selection;
    const listItems = selection.map((items) =>
        <li>{items}</li>
    );
    return (
        <>
            <h3>Produce Available</h3>
            <h3>{props.month}</h3>
            <ul>{listItems}</ul>
        </>
    )
}

Months.propTypes = {
    month: PropTypes.string,
    selection: PropTypes.array
}

export default Months;