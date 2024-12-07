import styled from 'styled-components';
import uniqid from 'uniqid';
import Header from "../common/Header";
import PropTypes from 'prop-types';

// Styled components
const StyledChecklist = styled.div`
    /* Mobile first */
/* Container */
    height: 100vh;
    overflow: hidden;

    header {
        padding: 1rem;

        h1 {
            font-size: 20px;
        }
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 8px 0 16px;
        
        .description {
            width: 100%;
            text-align: center;
            padding: 8px 16px;
        }
    
        section {
            min-height: 72vh;
            max-height: 77vh;
            width: 100%;
            overflow: auto;
            display: flex;
            flex-direction: column;
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.25);

            ul {
                flex-grow: 1;
                display: flex;
                flex-direction: column;
            }

            /* Div task */
            .task {
                padding: 1rem 4rem 2rem;

                .task_title {
                    display: flex;
                    font: var(--taskFontSizes);
                    padding-bottom: 8px;
                    gap: 1rem;
                    color: var(--white);

                    .checkbox {
                        appearance: none;
                        width: 20px;
                        height: 20px;
                        border: 2px solid;
                        border-color: var(--white);
                        border-radius: 5px;
                        background-color: transparent;
                        display: inline-block;
                        position: relative;
                        margin-right: 10px;
                        cursor: pointer;


                        &:before {
                            content: "";
                            background-color: var(--green);
                            display: block;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%) scale(0);
                            width: 10px;
                            height: 10px;
                            border-radius: 3px;
                            transition: all 0.3s ease-in-out;
                        }
                        
                        &:checked:before {
                            transform: translate(-50%, -50%) scale(1);
                        }
                    } 
                }

                p {
                    opacity: 0.65;
                }
            }
        }
    }
    

/* Responsive */
@media screen and (width > 450px) {
    html {
        font-size: 16px;
    }
}
@media screen and (width > 768px) {
    h1 {
        font: var(--titleFontSizes) !important;
    }
}
`;

const Checklist = ({ checklistId = 1 }) => {
    const data = [
        {
            id: 1,
            title: 'Checklist 1',
            description: 'Description de la Checklist 1',
            tasks: [
                {
                    id: 1,
                    title: 'Task 1',
                    done: false
                },
                {
                    id: 2,
                    title: 'Task 2',
                    done: false
                },
                {
                    id: 3,
                    title: 'Task 3',
                    done: true
                }
            ]
        },
        {
            id: 2,
            title: 'Checklist 2',
            description: 'Description de la Checklist 2',
            tasks: [
                {
                    id: 1,
                    title: 'Task 1',
                    done: false
                },
                {
                    id: 2,
                    title: 'Task 2',
                    done: false
                },
                {
                    id: 3,
                    title: 'Task 3',
                    done: true
                }
            ]
        },
        {
            id: 3,
            title: 'Checklist 3',
            description: 'Description de la Checklist 3',
            tasks: [
                {
                    id: 1,
                    title: 'Task 1',
                    done: false
                },
                {
                    id: 2,
                    title: 'Task 2',
                    done: false
                },
                {
                    id: 3,
                    title: 'Task 3',
                    done: false
                }
            ]
        }
    ];
    let newData = data.find(item => item.id === checklistId);
    return (
        <StyledChecklist>
            <Header h1Text="Checklist" btnBack='' btnEdit='' />

            <main>
                <div className="description">
                    <p>Description de la checklist</p>
                </div>

                <section>
                    <ul>
                        {newData.tasks.map((task) => {
                            return (
                                <li key={uniqid()}>
                                    <div className="task">
                                        <div className="task_title">
                                            <input type="checkbox" name="check" value="notDone" id={`task_${task.id}`} className="checkbox" />
                                            <label htmlFor={`task_${task.id}`}>{task.title} </label>
                                        </div>
                                        <p>{task.description}</p>
                                    </div>
                                </li>
                            );
                        })}

                    </ul>

                </section>

                <h2>State</h2>
            </main>
        </StyledChecklist>
    );
};

Checklist.propTypes = {
    checklistId: PropTypes.number
}



export default Checklist;