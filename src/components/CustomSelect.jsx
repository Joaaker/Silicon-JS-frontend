// Code for CustomSelect written with assistance from ChatGPT
import React from 'react';
import Select from 'react-select';
import ErrorMessage from '../common/ErrorMessage';

const CustomSelect = ({ specialist, handleChange, errors }) => {
    const options = [
        { value: '1', label: 'Lorem' },
        { value: '2', label: 'Ipsum' },
        { value: '3', label: 'Other' }
    ];

    const handleSelectChange = (selectedOption) => {
        handleChange({ target: { name: 'specialist', value: selectedOption.value } });
    };

    return (
        <>
            <label htmlFor="select">Specialist</label>
            <Select value={options.find(option => option.value === specialist)}
                onChange={handleSelectChange}
                options={options}
                className="custom-select-container"
                classNamePrefix="custom-select"
                placeholder=""
            />
            <ErrorMessage message={errors.specialist} />
        </>
    );
};

export default CustomSelect;