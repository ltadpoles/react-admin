import React, { useEffect } from 'react'
import Loadable from 'react-loadable'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const useLoadingComponent = () => {
    useEffect(() => {
        NProgress.start()
        return () => {
            NProgress.done()
        }
    }, [])

    return <div />
}

const load = (loader, loading = useLoadingComponent) => {
    return Loadable({
        loader,
        loading
    })
}

export default load
