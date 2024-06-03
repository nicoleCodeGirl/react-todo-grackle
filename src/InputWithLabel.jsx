import React, { useRef, useEffect } from 'react';


const InputWithLabel = ({ children, todoTitle, handleTitleChange }) => {
    const inputRef = useRef(null); 

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <>
            <label htmlFor="todoTitle">{children}</label>
            <input 
                type="text" 
                name="title" 
                value={todoTitle} 
                onChange={handleTitleChange}
                ref={inputRef}
            />
        </>
    );
};

export default InputWithLabel;