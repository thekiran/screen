import React from 'react'

const screen3 = () => {
    return (
        <div className="head">   
        <h1>
         This is screen 3   
        </h1>
        <div className="navs">
        <Link to="/screen2">Previous</Link>
        <Link to="/screen4">Next</Link> 
        </div></div>
    )
}

export default screen3
