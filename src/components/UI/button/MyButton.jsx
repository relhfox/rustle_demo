import styles from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
    return (
        <button className={styles.myBttn} {...props}>
            {children}
        </button>
    )
}

export default MyButton
