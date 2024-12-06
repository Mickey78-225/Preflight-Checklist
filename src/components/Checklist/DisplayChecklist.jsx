import uniqid from 'uniqid';
import ChecklistItem from "./ChecklistItem";

const DisplayChecklist = () => {
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

    // Changer la couleur de la checklist en fonction du nombre de tâches complétées
    const color = (completedTasks, totalTasks) => {
        if (completedTasks === totalTasks && totalTasks !== 0) {
            return 'done';
        } else if (completedTasks === 0 && totalTasks === 0) {
            return 'empty';
        } else {
            return 'inProgress';
        }
    };

    return (
        data.map((item) => {
            return (
                <li key={uniqid()}>
                    <ChecklistItem
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        completedTasks={item.tasks.filter(task => task.done).length}
                        totalTasks={item.tasks.length}
                        ChecklistState={color(item.tasks.filter(task => task.done).length, item.tasks.length)}
                    />
                </li>
            );
        })
    );
}

export default DisplayChecklist;