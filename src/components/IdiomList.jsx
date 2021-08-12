import React, { useEffect, useState } from 'react'
import { idioms } from '../data/idioms'
import Cookies from 'js-cookie'
import FadeIn from 'react-fade-in'

const IdiomList = (props) => {
    const [output, setOutput] = useState(idioms)
    const [likes, setLikes] = useState(Cookies.get("liked_idioms") ?? "[]")

    useEffect(() => {
        const isIncludes = (string, word) => string.toLowerCase().includes(word.toLowerCase())

        setOutput(
            idioms.filter(
                i => props.searchInput.split(" ").every(e => isIncludes(i.idiom, e) || isIncludes(i.meaning, e))
            )
        )
    }, [props.searchInput])

    const likeIdiom = (id) => {
        let arr = [...JSON.parse(likes)]

        arr.includes(id) ? arr.splice(arr.indexOf(id), 1) : arr.push(id)
        arr = JSON.stringify(arr)

        setLikes(arr)
        Cookies.set("liked_idioms", arr, { expires: 365 })
    }

    const clickIdiom = (i) => {
        props.setSidebarContent("choosen_idiom")
        props.setIdiom(i)
    }

    return (
        <FadeIn className="grid">
            {
                output.map(i => (
                    <div
                        className={`idiom ${props.idiom.id === i.id ? "active" : ""} ${JSON.parse(likes).includes(i.id) ? "liked" : ""}`}
                        onClick={() => clickIdiom(i)}
                    >
                        <svg width="1em" height="1em" viewBox="0 0 48 48" onClick={() => likeIdiom(i.id)}>
                            <path d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z" fill="none" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p className="description">{i.idiom}</p>
                    </div>
                ))
            }
        </FadeIn>
    )
}

export default IdiomList