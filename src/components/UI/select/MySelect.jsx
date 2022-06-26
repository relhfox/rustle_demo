import React from 'react'

const MySelect = ({value, change, defaultValue, options}) => {
    return (
        <select value={value} onChange={event => change(event.target.value)}>

            <option disabled value=''>{defaultValue}</option>

            {options.map(option =>
                <option value={option.value} key={option.value}>
                    {option.name}
                </option>
            )}
            
        </select>
    )
}

export default MySelect
