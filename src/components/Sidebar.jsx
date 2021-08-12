import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Sidebar = (props) => {
    return (
        <aside>
            <div className="sidebar__header">
                <span>
                    {props.content === "random_idiom" ? "Random Idiom" : "Choosen Idiom"}
                </span>
            </div>
            <div className="sidebar__content">
                <div>
                    <h4 className="sidebar__idiom">
                        {props.idiom.idiom}
                    </h4>
                    <p className="sidebar__idiom-meaning">
                        {props.idiom.meaning}
                    </p>
                </div>

                <CopyToClipboard text={props.idiom.idiom}>
                    <button className="animated-btn">Copy Idiom</button>
                </CopyToClipboard>
            </div>
        </aside>
    )
}

export default Sidebar