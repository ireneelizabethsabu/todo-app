import React from 'react';
import {ListGroupItem,ListGroup} from 'reactstrap';
import {useTasks} from '../../hooks/index';
import {CheckBox} from './CheckBoxComponent';

const TaskDisplay = () => {
    const {tasks} = useTasks('1');
    console.log(tasks);
    let projectName = '';
    
    return (
        <>
        <h2>{projectName}</h2>
        <ListGroup>
            {tasks.map(task => (
               <ListGroupItem key={`${task.id}`}>
                    <CheckBox id={task.id} />
                    <span>{task.task}</span>
                </ListGroupItem>            
           ))}
        </ListGroup>
        </>
    );
}

export default TaskDisplay;

