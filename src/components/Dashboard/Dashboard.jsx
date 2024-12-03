// Import necessary libraries
import styled from 'styled-components';
import PropTypes from 'prop-types';
// Import css 
import './Dashboard.css';
// Import components
import Button from '../common/Button/Button';

// Styled components
const StyledDashboardWhithoutList = styled.div`
        position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;

    /* Title */
    >p {
        font: var(--bigTextFontSizes);
        color: var(--yellow);
        text-align: center;
        text-transform: uppercase;
    }

    .btn_add_checklist p{
        display: block;
        font: var(--taskFontSizes) !important;
            text-transform: uppercase;
    }
`;
const DashboardWhithoutList = () => {
    return (
        <StyledDashboardWhithoutList>
            <p>You have not a checklist!!!</p>
            <Button
                btnClass='add_checklist'
                btnImg='../../../public/assets/addList.svg'
                btnText='add checklist'
            />
        </StyledDashboardWhithoutList>
    );
};

// Styled components
const StyledDashboardWhithList = styled.section`
    height: 1fr;
    padding: 4rem 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
`;
const DashboardWhithList = () => {
    return (
        <StyledDashboardWhithList>

            <div className="card_checklist">
                <div className="div_buttons">
                    <button className="btn_delete">
                        <img src="../assets/delete.svg" alt="Icon trash for delete the list" />
                    </button>
                    <button className="btn_edit">
                        <img src="../assets/edit.svg" alt="Icon pencil for edit the list" />
                    </button>
                </div>
                <div className="card_text">
                    <h2>Checklist name</h2>
                    <p>Description</p>
                </div>
                <div className="checklist_state">
                    <p><span>Complete Task</span> / <span>Total Task</span></p>
                </div>
            </div>

        </StyledDashboardWhithList>
    );
};

const Dashboard = ({ isChecklist = false }) => {
    return (
        <>
            {isChecklist ? <DashboardWhithList /> : <DashboardWhithoutList />}
        </>
    );
};

Dashboard.propTypes = {
    isChecklist: PropTypes.bool,
};

export default Dashboard;