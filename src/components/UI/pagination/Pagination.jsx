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
        <div>
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
