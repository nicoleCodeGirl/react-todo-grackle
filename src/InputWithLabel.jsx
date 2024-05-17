import React, { useRef, useEffect } from 'react';

// Define and export the InputWithLabel component
const InputWithLabel = (props) => {
    const inputRef = useRef(null); // Create a ref object

    // Define useEffect without a dependency list
    useEffect(() => {
        // Code to run after component mounts
        console.log('Component mounted or updated');
        if (inputRef.current) {
            inputRef.current.focus(); // Call focus on the input element
        }
    });

    return (
        <>
            <label htmlFor="todoTitle">{props.children}</label>
            <input 
                type="text" 
                name="title" 
                value={props.todoTitle} 
                onChange={props.handleTitleChange}
                ref={inputRef} // Attach the ref to the input element
            />
        </>
    );
};

export default InputWithLabel;