import styles from './MyInput.module.css'

const MyInput = (props) => {
    return (
        <input className={styles.MyInpt} {...props}/>
    )
}

export default MyInput
