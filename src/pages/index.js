import React, {Fragment} from "react";
import SEO from '../components/SEO'



export default () => {
    const style = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'var(--Black)',
        color: 'var(--White)',
    }

    return(
        <Fragment>
            <SEO/>
                <div style={style}>
                    <h1>Coming Soon...</h1>
                    <p>Check back soon for my personal portfolio site.</p>
                </div>
        </Fragment>


    )
}

