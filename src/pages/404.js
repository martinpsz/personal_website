import React from 'react';
import {Link} from 'gatsby';

export default() => {
    const style = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'var(--Black)',
        color: 'var(--White)',
    }

    const buttonStyle = {
        background: 'var(--Orange)',
        color: 'var(--White)'
    }

    return(
        <div style={style}>
            <h1>Oops...</h1>
            <p>Nothing to see here! Click below to back to the home page.</p>
            <Link to="/" className="btn btn-lg" role="button" style={buttonStyle}>Home</Link>
        </div>
    )
}