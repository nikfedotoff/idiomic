import React, { useState } from 'react'
import Cookies from 'js-cookie'

const Cookie = () => {
    const [accepted, setAccepted] = useState(Cookies.get("cookies_accepted"))

    const accept = () => {
        Cookies.set("cookies_accepted", true, { expires: 365 })
        setAccepted(true)
    }

    if(accepted) {
        return null
    }

    return (
        <div className="cookie">
            <div>
                <p>
                    {/* eslint-disable-next-line */}
                    This site uses <a href="#">cookies</a>  to improve your experience.
                </p>
                <button onClick={accept}>Okay, Sure!</button>
            </div>
        </div>
    )
}

export default Cookie