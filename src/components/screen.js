import React from 'react'

const Screen1 = () => {
    return (
        <div className="head">
            <h1>   This is the screen 1</h1>

            <div className="navs">
                    <Link to="/">Previous</Link>
                    <Link to="/screen2">Next</Link> 
            </div>
        </div>
    )
}

export default Screen1
