import React from 'react';

const InputForm = ({type, className, placeholder, id, name, onChange, value}) => {
    return (
        <>
            <input type={type}
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