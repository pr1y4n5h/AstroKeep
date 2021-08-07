import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';

export const Notes = () => {
    return (
        <div className="note-box">
            <h1> Title </h1>
            <br />
            <p> This is content </p>
            <Button>
            <DeleteOutlineIcon className="" />
            </Button>
        </div>
        
    )
}
