// Import librairies
import PropTypes from "prop-types";
// Import styles
import './Button.css';

const Button = ({ btnClass, BtnImg, btnText=' ' }) => {
    return (
        <button className={btnClass}>
            <img src={BtnImg} alt="Icon add list" />
            <p>{btnText}</p>
        </button>
    );
};

Button.propTypes = {
    btnClass: PropTypes.string.isRequired,
    BtnImg: PropTypes.string.isRequired,
    btnText: PropTypes.string,
};

export default Button;