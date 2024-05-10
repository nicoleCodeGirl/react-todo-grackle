import React from 'react';

// Define and export the InputWithLabel component
const InputWithLabel = (props) => {
    return (
        <>
             <label htmlFor="todoTitle">{props.label}</label>
            <input 
                type="text" 
                id="todoTitle" 
                name="title" 
                value={props.todoTitle} 
                onChange={props.handleTitleChange}
            />
        </>
    );
};

export default InputWithLabel;