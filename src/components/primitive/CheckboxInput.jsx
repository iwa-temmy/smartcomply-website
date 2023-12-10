import React from 'react';

const CheckboxInput = ({ name, type, label, styles, labelStyles, disabled, checked, onChange }) => {
    return (
        <div className={`w-full flex items-center my-1 ${styles}`}>
            <input
                name={name}
                type={type}
                onChange={onChange}
                checked={checked}
                className="focus:ring-yellow-100 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                disabled={disabled}
            />
            <label className={`uppercase ml-2 textbrandColor ${labelStyles}`}>{label}</label>
        </div>
    );
};

export default CheckboxInput;
