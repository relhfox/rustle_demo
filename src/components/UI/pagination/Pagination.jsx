import { getPagesArray } from '../../../utils/pages'
import styles from './Pagination.module.css'

const Pagination = ({totalPages, currPage, setCurrPage}) => {
    let pagesArray = getPagesArray(totalPages)

    return (
        <div>
            {pagesArray.map(p =>
                <span
                    className={p === currPage ? [styles.page, styles.page__current].join(' ') : styles.page}
                    onClick={() => setCurrPage(p)}
                    key={p}
                >
                    {p}
                </span>
            )}
        </div>
    )
}

export default Pagination
