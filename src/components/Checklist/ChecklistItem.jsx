// Import necessary libraries
import styled from "styled-components";
import PropTypes from "prop-types";
// Import components
import Button from "../common/Button/Button";

// Styled components
const StyledCard = styled.div`
    height: 400px;
    min-width: 300px;
    max-width: 400px;
    padding: 8px;
    border-radius: 16px;
    box-shadow: 12px 12px 16px rgba(0, 0, 0, .25), -12px -12px 16px rgba(255, 255, 255, .25);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .div_buttons {
        display: flex;
        justify-content: space-between;
    }

    .card_text {
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem 0;
        gap: 3rem;
        
        p {
            font: var(--taskFontSizes);
        }
    }

    .checklist_state {
        display: flex;
        justify-content: center;
    
        p {
            font: var(--taskFontSizes);
        }
    }

    @media screen and (width >= 560px) {
        height: 500px;
        width: 400px;
        padding: 1rem;
    }
`;


const ChecklistItem = ({
    checklistTitle = 'Checklist name',
    checklistDescription = 'Description',
    checklistState = 'Complete Task / Total Task'

}) => {
    return (
        <StyledCard>
            <div className="div_buttons">
                <Button btnClass='delete' btnImge='../../../public/assets/delete.svg' />
                <Button btnClass='edit' btnImge='../../../public/assets/edit.svg' />
            </div>

            <div className="card_text">
                <h2>{checklistTitle}</h2>
                <p>{checklistDescription}</p>
            </div>

            <div className="checklist_state">
                <p><span>{checklistState}</span></p>
            </div>
        </StyledCard>
    );
};

ChecklistItem.propTypes = {
    checklistTitle: PropTypes.string,
    checklistDescription: PropTypes.string,
    checklistState: PropTypes.string,
};

export default ChecklistItem;