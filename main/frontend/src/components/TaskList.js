import React, { useState} from 'react';

//Default tasks
const TaskList = () => {
    const [tasks, setTasks] = useState ([
        { text: 'Wakeup', completed: false },
        { text: 'Study', completed: false },
        { text: 'Mindfulness', completed: false },
        { text: 'Fitness', completed: false },
        { text: 'Lunch', completed: false },
        { text: 'Recovery', completed: false },
        { text: 'Chores', completed: false },
        { text: 'Family Time', completed: false },
        { text: 'Dinner', completed: false },
        { text: 'Read', completed: false },
        { text: 'Gratitude', completed: false },
        { text: 'Sleep', completed: false },
    ]);

    // Update tasks status
    const handleCheckboxChange = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    return (
        <main>
            <h2>Daily Tasks</h2>
            <ul style={{ listStyleType: 'none' }}>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleCheckboxChange(index)}
                    />
                    {task.text}
                </li>
                ))}
            </ul>
        </main>
    );
};

export default TaskList;
