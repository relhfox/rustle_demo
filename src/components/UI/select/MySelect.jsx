import styles from './MySelect.module.css'

const MySelect = ({value, change, defaultValue, options}) => {
    return (
        <select className={styles.MySelect} value={value} onChange={event => change(event.target.value)}>

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
