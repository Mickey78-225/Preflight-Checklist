// Import necessary libraries
import styled from 'styled-components';
import PropTypes from 'prop-types';
// Import css 
import './Dashboard.css';
// Import components
import Button from '../common/Button/Button';
import ChecklistItem from '../Checklist/ChecklistItem';

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

    .add_checklist p{
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
            <ChecklistItem />
        </StyledDashboardWhithList>
    );
};

const Dashboard = ({ isChecklist = true }) => {
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