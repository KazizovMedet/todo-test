import React from 'react';

const InputForm = ({type, className, placeholder, id, name, onChange, value, defaultValue}) => {
    return (
        <>
            <input type={type}
                   defaultValue={defaultValue}
                   className={className}
                   placeholder={placeholder}
                   id={id}
                   name={name}
                   onChange={onChange}
                   value={value}
            />
        </>
    );
};

export default InputForm;