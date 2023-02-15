import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useGetAllDataQuery, useGetPostQuery } from '../pages/Features/apiCall'

const Myblogs = () => {
    const [Myblog, setMyblog] = useState([])
    const { data, isLoading } = useGetPostQuery()

    useEffect(() => {
        {
            isLoading
                ?
                ""
                :
                setMyblog(data.posts)
        }
    })
    return (
        <>
            <div className="card shadow rounded-0">
                {
                    isLoading
                        ?
                        <div className=' text-center mt-5'>

                            <img src="/loaders/giphy.gif" alt="txt" />
                        </div>
                        :
                        Myblog.slice(0, 2).map((e, i) => {
                            return (
                                <>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <Link href={`Blog/${e.id}`}>
                                                <img
                                                    src="https://dummyimage.com/250x250/f8f9fa/6c757d.jpg"
                                                    className="img-fluid w-100 h-100"
                                                    alt="post title"
                                                />
                                            </Link>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <strong className="d-inline-block mb-2 text-primary">
                                                    {e.tags[0]}
                                                </strong>
                                                <Link
                                                    href={`Blog/${e.id}`}
                                                    className="text-dark text-decoration-none"
                                                >
                                                    <h5 className="card-title text-capitalize mb-0">
                                                        {e.title}
                                                    </h5>
                                                </Link>
                                                <div className="mb-1 text-muted">Nov 12</div>
                                                <p className="card-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit. Nam in nunc purus. Cras ut tempus diam, nec
                                                    convallis mauris. Etiam a mollis odio.

                                                </p>
                                                <Link
                                                    href={`Blog/${e.id}`}
                                                    className="btn btn-outline-primary"
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </>
                            )
                        })
                }
            </div>
        </>
    )
}

export default Myblogs
