import React, { useState, useEffect } from 'react'
import './App.css'
import { idioms } from './data/idioms'

import Cookie from './components/Cookie'
import MainScreen from './components/MainScreen'
import Sidebar from './components/Sidebar'

const App = () => {
	const [shownIdiom, setShownIdiom] = useState(idioms[Math.floor(Math.random() * idioms.length)])
	const [sidebarContent, setSidebarContent] = useState("random_idiom")

	return (
		<div className="wrapper">
			<Cookie />
			<MainScreen
				idiom={shownIdiom}
				setIdiom={setShownIdiom}
				setSidebarContent={setSidebarContent}
			/>
			<Sidebar
				idiom={shownIdiom}
				content={sidebarContent}
			/>
		</div>
	)
}

export default App
