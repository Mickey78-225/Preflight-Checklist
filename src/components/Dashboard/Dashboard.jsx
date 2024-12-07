// Import necessary libraries
import styled from 'styled-components';
import PropTypes from 'prop-types';
// Import css 
import './Dashboard.css';
// Import components
import Button from '../common/Button/Button';
import DisplayChecklist from '../Checklist/DisplayChecklist';
import Header from '../common/Header';

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
                btnImg='/assets/addList.svg'
                btnText='add checklist'
            />
        </StyledDashboardWhithoutList>
    );
};

// Styled components
const StyledDashboardWhithList = styled.ul`
    height: 1fr;
    padding: 4rem 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    @media screen and (width >= 560px) {
        padding: 4rem 2rem;
        display: grid;
        align-items: center;
        justify-items: center;
        gap: 2rem 5rem;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    }
`;
const DashboardWhithList = () => {
    return (
        <StyledDashboardWhithList>
            <DisplayChecklist />
        </StyledDashboardWhithList>
    );
};

const Dashboard = ({ isChecklist = true }) => {
    console.log(window.location.pathname);
    return (
        <>
            <Header h1Text='Preflight checklist' btnAddChecklist=''/>
            <main>
                {isChecklist ? <DashboardWhithList /> : <DashboardWhithoutList />}
            </main>
        </>
    );
};

Dashboard.propTypes = {
    isChecklist: PropTypes.bool,
};

export default Dashboard;