import React, { useState } from 'react';
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

function EditForm({id, text, setIsEdit, editTask, showAlert}) {

    const [task, setTask] = useState(text);

    const submitEdit = (e) => {
        e.preventDefault();
        setIsEdit(false);
        editTask(id, task);
    }

    return (
        <div className="Task">
            <form onSubmit={submitEdit}>
                <TextField 
                    className="Task-edit"
                    id="filled-basic" 
                    inputProps={{style: {color: "white"}}}
                    variant="filled"
                    value={task}
                    size="small"
                    onChange={(e) => setTask(e.target.value)}
                /> 
                <IconButton
                    aria-label="submit-edit"
                    type="submit"
                >
                <DoneOutlineOutlinedIcon className="Done-edit-btn"/>
                </IconButton>

                <IconButton
                    aria-label="submit-edit"
                    onClick={() => setIsEdit(false)}
                >
                    <CancelOutlinedIcon className="Undo-edit-btn"/>
                </IconButton>
            </form>
        </div>        

    );
}

export default EditForm;