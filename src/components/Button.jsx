import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button id={props.id}>{props.text}</button>
    )
}

Button.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string
}

export default Button;

// using in next level component:
// <Button
//   id="search"
//   text={props.btnText}
// />