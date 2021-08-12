import React, { useState } from 'react'
import Filter from './Filter'
import Footer from './Footer'
import Header from './Header'
import IdiomList from './IdiomList'

const MainScreen = (props) => {
    const [searchInput, setSearchInput] = useState("")

    return (
        <div className="main-screen">
            <Header />
            <main>
                <div className="main-content">
                    <h1>Learn Idioms</h1>
                    <p className="subtitle">
                        <span>— so you can understand what native speakers are talking about.</span>
                        <span>Mark and copy idioms you like.</span>
                    </p>
                    <Filter
                        searchInput={searchInput}
                        setSearchInput={setSearchInput}
                    />
                    <IdiomList
                        searchInput={searchInput}
                        idiom={props.idiom} 
                        setIdiom={props.setIdiom}
                        setSidebarContent={props.setSidebarContent}
                    />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default MainScreen