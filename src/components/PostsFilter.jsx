import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

const PostsFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.search}
                onChange={e => setFilter({...filter, search: e.target.value})}
                placeholder='Search post...'
            />

            <MySelect
                value={filter.sort}
                change={selected => setFilter({...filter, sort: selected})}
                defaultValue='Sort by'
                options={[
                    {value: 'new', name: 'New first'},
                    {value: 'old', name: 'Oldest first'}
                ]}
            />
        </div>
    )
}

export default PostsFilter
