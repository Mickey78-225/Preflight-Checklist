import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "./Button/Button";

const StyledHeader = styled.header`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
        padding: 1rem 2rem;
        background-color: var(--blue);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
        position: sticky;
        top: 0;
        z-index: 1;
`;

// Function pour chager l'affichage du header en fonction de la page


const Header = ({h1Text, 
    btnBack = 'display',
    btnAddChecklist = 'display',
    btnValid = 'display',
    btnEdit = 'display'
}) => {
    return (
        <StyledHeader>
            <Button
                btnClass={`back ${btnBack}`}
                btnImg="/assets/back.svg"
            />
            <h1> {h1Text} </h1>
            <Button
                btnClass={`add_checklist ${btnAddChecklist}`}
                btnImg="/assets/addList.svg"
            />
            <Button
                btnClass={`valid ${btnValid}`}
                btnImg="/assets/check.svg"
            />
            <Button 
                btnClass={`edit ${btnEdit}`}
                btnImg="/assets/edit.svg"
            />
        </StyledHeader>
    );
};

Header.propTypes = {
    h1Text: PropTypes.string.isRequired,
    btnBack: PropTypes.string,
    btnAddChecklist: PropTypes.string,
    btnValid: PropTypes.string,
    btnEdit: PropTypes.string
};

export default Header;