import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useGetPostQuery } from '../pages/Features/apiCall'

const Myblog = () => {
    let [blog, setBlog] = useState([])
    const { data, isLoading } = useGetPostQuery()

    console.log("hit", blog);
    useEffect(() => {
        { isLoading ? '' : setBlog(data.posts) }
    }, [isLoading])
    return (
        <>
            <div className="card shadow rounded-0 m-2">
                {
                    isLoading
                        ?
                        <div className=' text-center mt-5'>

                            <img src="/loaders/giphy.gif" alt="txt" />
                        </div>
                        :
                        blog.slice(0, 1).map((e, i) => {
                            return (
                                <>
                                    <Link href={`Blog/${e.id}`}>
                                        <img
                                            src="https://dummyimage.com/550x330/f8f9fa/6c757d.jpg"
                                            className="card-img-top"
                                            alt="post title"
                                        />
                                    </Link>
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
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Nam in nunc purus. Cras ut tempus diam, nec convallis
                                            mauris. Etiam a mollis odio.
                                            {e.body}
                                        </p>
                                        <Link href={`Blog/${e.id}`} className="btn btn-outline-primary">
                                            Read More
                                        </Link>
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

export default Myblog
