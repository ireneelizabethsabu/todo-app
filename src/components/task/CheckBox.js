import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import {firebase} from '../../firebase';
import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';

export const CheckBox = ({id}) => { 
    
    const completedTask = () => {
        firebase.firestore().collection('tasks').doc(id).update({
            completed: true,
        });
    };

    return (
        <Checkbox icon={<RadioButtonUncheckedOutlinedIcon fontSize="small"/>} 
        color="secondary" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} onClick={() => completedTask()}/>
    );
};


