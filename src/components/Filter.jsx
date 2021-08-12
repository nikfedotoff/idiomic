import React from 'react'

const Filter = (props) => {
    const clearInput = () => props.setSearchInput("")

    return (
        <div className="filter">
            <div className="search">
                <svg viewBox="0 0 24 24" className="search__view">
                    <path fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M9.5 17a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm12.007 4.507l-6.694-6.694"></path>
                </svg>
                <input
                    type="text"
                    role="searchbox"
                    autoComplete="off"
                    value={props.searchInput}
                    placeholder="Search by keywords like &quot;chat&quot; or &quot;arrow&quot;"
                    className="search__input"
                    onChange={e => props.setSearchInput(e.target.value)}
                />
                <svg width="24" height="24" viewBox="0 0 24 24" className="search__close" onClick={clearInput}>
                    <g fill="none" fill-rule="evenodd">
                        <rect width="24" height="24"></rect>
                        <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M18,6 L6,18 M6,6 L18,18"></path>
                    </g>
                </svg>
            </div>
            <div className="switchers">
                <button className="active">English</button>
                <button disabled>Русский</button>
            </div>
        </div>
    )
}

export default Filter