import React from 'react'
import Loadable from 'react-loadable'
// import loading from '../assets/images/loading.gif'

const loadingComponent = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            {/* <img src={loading} alt='loading...'></img> */}
        </div>
    )
}

export default (loader, loading = loadingComponent) => {
    return Loadable({
        loader,
        loading
    })
}