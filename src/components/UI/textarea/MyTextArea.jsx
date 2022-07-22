import styles from './MyTextArea.module.css'

const MyTextArea = (props) => {
    return (
        <textarea className={styles.MyTxt} {...props}/>
    )
}

export default MyTextArea
