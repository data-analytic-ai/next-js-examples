'use client'

import {useState} from "react"
export default function Home() {
    const [label, setLabel] = useState('Show')
    const handleClick = () => {
        setLabel(label === 'Show' ? 'Hide' : 'Show')
    }
    return (
        <>
            <button onClick={handleClick}>{label}</button>
        </>
    )
}