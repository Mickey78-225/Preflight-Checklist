import styled from "styled-components";

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

const Header = () => {
    return ( 
        <StyledHeader>
            <h1>Pre-flight checklist</h1>
            <button className="btn_add_checklist">
                <img src="../../../public/assets/addList.svg" alt="Icon add list" />
                <p>Add checklist</p> 
            </button>
        </StyledHeader>
    );
}
 
export default Header;