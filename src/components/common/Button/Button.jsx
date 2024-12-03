// Import librairies
import PropTypes from "prop-types";
// Import styles
import './Button.css';

const Button = ({ btnClass, btnImg, btnText=' ' }) => {
    return (
        <button className={btnClass}>
            <img src={btnImg} alt="Icon add list" />
            <p>{btnText}</p>
        </button>
    );
};

Button.propTypes = {
    btnClass: PropTypes.string.isRequired,
    btnImg: PropTypes.string.isRequired,
    btnText: PropTypes.string,
};

export default Button;