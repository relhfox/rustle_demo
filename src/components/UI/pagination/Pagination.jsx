import { getPagesArray } from '../../../utils/pages'
import MySelect from '../select/MySelect'
import styles from './Pagination.module.css'

const Pagination = ({totalPages, currPage, setCurrPage, limit, setLimit}) => {

    let pagesArray = getPagesArray(totalPages)

    const handler = selected => {
        setLimit(selected)
        setCurrPage(1)
    }

    return (
        <div className={styles.pages}>
            <div className={styles.pages__head}>
                Posts on page:

                <MySelect
                    value={limit}
                    change={handler}
                    defaultValue='--'
                    options={[
                        {value: 5, name: '5'},
                        {value: 10, name: '10'},
                        {value: 25, name: '25'},
                        {value: 50, name: '50'},
                        {value: -1, name: 'All'}
                    ]}
                />
            </div>

            <div className={styles.pages__pagi}>
                {pagesArray.map(p =>
                    <div
                        className={p === currPage ? [styles.page, styles.page__current].join(' ') : styles.page}
                        onClick={() => setCurrPage(p)}
                        key={p}
                    >
                        {p}
                    </div>
                )}
            </div>
            
        </div>
    )
}

export default Pagination
