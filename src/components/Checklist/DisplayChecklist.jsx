import uniqid from 'uniqid';
import ChecklistItem from "./ChecklistItem";

const DisplayChecklist = () => {
    const data = [
        {
            id: 1,
            title: 'Checklist 1',
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
        }
    ];
    return (
        data.map((item) => {
            return (
                <li key={uniqid()}>
                    <ChecklistItem
                        key={item.id}
                        title={item.title}
                        tasks={item.tasks}
                    />
                </li>
            );
        })
    );
}

export default DisplayChecklist;