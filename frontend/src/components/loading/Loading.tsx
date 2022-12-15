import React from 'react'
import './Loading.css'

const Loading = () => {
    return (
        <div className='container'>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loading