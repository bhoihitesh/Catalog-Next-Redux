import React, { useState } from 'react'
import { useGetAllDataQuery } from './Features/apiCall'

const test = () => {
    let [api, setApi] = useState([])
    const res = useGetAllDataQuery()
    let getdata = res.data
    console.log(getdata);
    if (res.isLoading == true) {
        return
    }

    return (
        <>
            <div>
                {getdata.map((e, i) => {
                    return (
                        <>
                            <p key={i}>
                                {e.id}
                            </p>
                        </>
                    )
                })}
                {/* {
                    res.isLoading
                        ?
                        <button className="btn btn-primary" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button>
                        :
                        getdata.map((e) => {
                            console.log("jd", e)
                            return (
                                <>

                                </>
                            )
                        })
                } */}
            </div>
        </>
    )
}

export default test
