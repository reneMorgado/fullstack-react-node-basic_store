import React from 'react'

const Loading = () => {
    return (
        <div className="container is-max-desktop">
            <p className="subtitle is-3">Loading, please make sure the API is working</p>
            <progress className="progress is-medium is-dark" max="100">45%</progress>
        </div>
    )
}

export default Loading
