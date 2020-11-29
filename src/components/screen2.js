import React from 'react'

const Screen1 = () => {
    return (
        <div className="head">
            <h1>
                This is screen 2
        </h1>
            <div className="navs">
                <Link to="/">Previous</Link>
                <Link to="/screen3">Next</Link> 
            </div>
        </div>
    )
}

export default Screen1
