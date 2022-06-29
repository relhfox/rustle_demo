import styles from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {

    const mdlClasses = [styles.myModal]

    if (visible) {
        mdlClasses.push(styles.active)
    }

    return (
        <div className={mdlClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={styles.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModal
