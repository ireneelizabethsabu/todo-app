import React,{useState} from 'react';
import {Col} from 'reactstrap';
import { MarkasDone } from "./Markasdone";
import { Chip } from '@material-ui/core';
import { Delete } from "./Delete";
//import {Edit} from './Edit';

const Card = ({task}) => {
    const [show, setShow] = useState(false);

    return(
        <Col key={`${task.id}`} className="task-div my-2 mx-3 py-2" sm="10" >
            <div className="task-title d-flex justify-content-between" onClick={() => setShow(!show)} >
                <span >
                {task.title}
                </span>
                <span>
                    {/* <Edit curTask={task} /> */}
                    <MarkasDone id={task.id} />
                    <Delete id={task.id}/>
                </span>
            </div>
            {show &&
            <span>
                {task.description && <p className="task-description mb-2">{task.description}</p> }
                <Chip label={task.time} color="primary" />
                <Chip label={task.date} color="primary" />
            </span>}
        </Col>
    );
}

export default Card;